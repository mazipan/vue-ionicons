const fs = require('fs')
const mustache = require('mustache')
const path = require('path')
const shell = require('shelljs')
const chalk = require('chalk')
const ora = require('ora')
const SVGO = require('svgo/lib/svgo')

const dist = path.resolve(__dirname, 'dist')
const svgPath = path.resolve(__dirname, 'ionicons/src')

const svgs = fs.readdirSync(svgPath)
const svgo = new SVGO()

console.log(chalk.yellow('Build starting...'))
var spinner = ora('building...')
spinner.start()

shell.config.silent = false
shell.rm('-rf', dist)

const getSVGString = (svg) => {
  return new Promise((resolve, reject) => {
    let filepath = path.join(svgPath, svg)
    fs.readFile(filepath, { encoding: 'utf8'}, (err, stream) => {
      svgo.optimize(stream, { path: filepath })
        .then(function(result) {
          resolve(result.data);
      })
    })
  })
}

const makeHumanReadable = (name) => {
  let array = name.split('-')
  let tempArray = array.map(elm => {
    return elm.charAt(0).toUpperCase() + elm.slice(1)
  })
  return tempArray.join(' ')
}

const sanitizeSVG = (stream) => {
  let newStream = stream
    .replace(' xmlns="http://www.w3.org/2000/svg"', '')
    .replace('width=', ':width=')
    .replace('height=', ':height=')
    .replace('512', 'w')
    .replace('512', 'h')
    .replace('<style>.st0{fill:#010101}</style>', '')
    .replace('<style>', '<data-style>')
    .replace('</style>', '</data-style>')

  return newStream
}

const generateTemplateData = () => {
  let templateData = [];
  let promises = svgs.map(svgPath => {
    let name = svgPath.slice(0, -4)
    let readableName = makeHumanReadable(name)
    let libraryName = readableName.split(' ').join('')

    return new Promise((resolve, reject) => {
      getSVGString(svgPath).then((result) => {
        templateData.push({
          name: name,
          readableName: readableName,
          libraryName: libraryName + 'Icon',
          svg: sanitizeSVG(result)
        })
        resolve(templateData);
      })
    })
  })

  return new Promise((resolve, reject) => {
    Promise.all(promises).then(() => {
      resolve(templateData);
    })
  })
}

const generateBuildFile = (template, extension, templateData) => {
  return new Promise((resolve, reject) => {
    fs.readFile(template, { encoding: 'utf8'}, (err, componentFile) => {
      for (data of templateData) {
        let component = mustache.render(componentFile, data)
        let filename = data.name + "." + extension
        fs.writeFile(path.resolve(dist, filename), component, (err) => {
          if(err) {
            reject(err)
          }
          resolve()
        })
      }
    })
  });
}

const generatePluginFile = (template, templateData) => {
  return new Promise((resolve, reject) => {
    spinner.stop()
    console.log(chalk.yellow('Generating plugin file...'))
    spinner.start()
    fs.readFile(template, { encoding: 'utf8'}, (err, componentFile) => {
      let data = {
        data: []
      };
      data.data = templateData

      let component = mustache.render(componentFile, data)
      let filename = "ionicons.js"
      fs.writeFile(path.resolve(dist, filename), component, (err) => {
        if(err) {
          reject(err)
        }
        spinner.stop()
        console.log(chalk.green('Plugin file generated, filename: ' + filename))
        spinner.start()
        resolve()
      })
    })
  });
}

const templateVue = path.resolve(__dirname, 'template-vue.mst')
const templateJS = path.resolve(__dirname, 'template-js.mst')

generateTemplateData().then((templateData) => {
  if (fs.existsSync(dist)) {
    fs.rmdirSync(dist)
  }
  fs.mkdirSync(dist)
  Promise.all([
    generateBuildFile(templateVue, 'vue', templateData),
    generatePluginFile(templateJS, templateData)
  ]).then(() => {
    shell.cp('ionicons.css', 'dist/')
    shell.cp('package.json', 'dist/')
    shell.cp('README.md', 'dist/')

    spinner.stop()
    console.log(chalk.green('Build completed'))
  })
})
