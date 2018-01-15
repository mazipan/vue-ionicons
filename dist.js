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

console.log(chalk.green('Build starting...'))
var spinner = ora('generating file in progress...')
spinner.start()

shell.config.silent = false
shell.rm('-rf', dist)

const sanitizeSVG = (stream) => {
  let newStream = stream
  newStream = newStream.replace(' xmlns="http://www.w3.org/2000/svg"', '')
  newStream = newStream.replace('width="512px" height="512px"', 'width="1em" height="1em"')

  return newStream
}
const getSVGString = (svg) => {
  return new Promise((resolve, reject) => {
    let filepath = path.join(svgPath, svg)
    fs.readFile(filepath, { encoding: 'utf8'}, (err, stream) => {
      stream = sanitizeSVG(stream)
      svgo.optimize(stream, { path: filepath }).then(function(result) {
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
          svg: result
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

const templateVue = path.resolve(__dirname, 'template-vue.mst')
const templateJS = path.resolve(__dirname, 'template-js.mst')


generateTemplateData().then((templateData) => {
  if (fs.existsSync(dist)) {
    fs.rmdirSync(dist)
  }
  fs.mkdirSync(dist)
  Promise.all([
    generateBuildFile(templateVue, 'vue', templateData),
    generateBuildFile(templateJS, 'js', templateData)
  ]).then(() => {
    shell.cp('ionicons.css', 'dist/')
    shell.cp('package.json', 'dist/')
    shell.cp('README.md', 'dist/')

    spinner.stop()
    console.log(chalk.green('Build completed...'))
  })
})
