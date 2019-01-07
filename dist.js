const fs = require('fs')
const mustache = require('mustache')
const path = require('path')
const shell = require('shelljs')
const chalk = require('chalk')
const ora = require('ora')
const SVGO = require('svgo/lib/svgo')

const dist = path.resolve(__dirname, 'dist')
const svgPath = path.resolve(__dirname, 'ionicons/src/svg')

const svgs = fs.readdirSync(svgPath)
const VERSION = process.env.npm_package_version

console.log(chalk.yellow(`Build v${VERSION} starting...`))
var spinner = ora('building...')
spinner.start()

shell.config.silent = false
shell.rm('-rf', dist)
shell.rm('-rf', path.resolve(__dirname, 'demo/dist'))

shell.exec(`svgo ${svgPath}/*.svg`, {silent:true});

const getSVGString = (svg) => {
  return new Promise((resolve, reject) => {

    let filepath = path.join(svgPath, svg)
    console.log(chalk.yellow(`Proccessing icon ${svg}...`))
    fs.readFile(filepath, { encoding: 'utf8' }, (err, stream) => {
      try {
        let newStream = sanitizeSVG(stream)
        resolve(newStream)
      } catch (error) {
        reject(newStream)
      }
    })
  })
}

const sanitizeSVG = (stream) => {

  let newStream = stream
    .replace('<?xml version="1.0" encoding="utf-8"?>', '')
    .replace('<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->', '')
    .replace('<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->', '')
    .replace('<!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->', '')
    .replace(' xmlns="http://www.w3.org/2000/svg"', '')
    .replace('<style>.st0{fill:#010101}</style>', '')
    .replace('<style>', '<data-style>')
    .replace('</style>', '</data-style>')
    .replace('fill="#010101"', '')
    .replace('fill="#231F20"', '')
    .replace('fill=', 'data-fill=')
    .replace('width="512" height="512"', '')
    .replace('<svg', '<svg :width="w" :height="h" class="ion__svg"')

  if (newStream.indexOf('viewBox="0 0 512 512"') < 0){
      newStream = newStream.replace('<svg', '<svg viewBox="0 0 512 512" ')
  }

  return newStream
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
    if (svgPath.indexOf('.svg') >= 0) {
      return new Promise((resolve, reject) => {
        getSVGString(svgPath).then((result) => {
          try {
            let name = svgPath.slice(0, -4)
            let readableName = makeHumanReadable(name)
            let libraryName = readableName.split(' ').join('')

            templateData.push({
              name: name,
              readableName: readableName,
              libraryName: libraryName + 'Icon',
              svg: result
            })
            resolve(templateData);
          } catch (error) {
            reject(templateData)
          }
        })
      })
    }
  })

  return new Promise((resolve, reject) => {
    Promise.all(promises).then(() => {
      resolve(templateData);
    })
  })
}

const generateVueFile = (templateData) => {
  const templateVue = path.resolve(__dirname, 'template-vue.mst')

  return new Promise((resolve, reject) => {
    fs.readFile(templateVue, { encoding: 'utf8' }, (err, componentFile) => {
      for (data of templateData) {
        let component = mustache.render(componentFile, data)
        let filename = data.name + ".vue"
        fs.writeFile(path.resolve(dist, filename), component, (err) => {
          if (err) {
            reject(err)
          }
          resolve()
        })
      }
    })
  });
}

const commonGenerateFile = (templateData, templateFile, outputFilename) => {
  const templateMustache = path.resolve(__dirname, templateFile)

  return new Promise((resolve, reject) => {
    spinner.stop()
    console.log(chalk.yellow('Start generating file...'))
    spinner.start()
    fs.readFile(templateMustache, { encoding: 'utf8' }, (err, componentFile) => {
      let data = {
        data: []
      };
      data.data = templateData

      let component = mustache.render(componentFile, data)
      fs.writeFile(path.resolve(__dirname, outputFilename), component, (err) => {
        if (err) {
          reject(err)
        }
        spinner.stop()
        console.log(chalk.green('File generated with filename: ' + outputFilename))
        spinner.start()
        resolve()
      })
    })
  });
}

const generateVersionFile = () => {
  spinner.stop()
  console.log(chalk.yellow('Generating VERSION file...'))
  spinner.start()
  return new Promise((resolve, reject) => {
    fs.writeFile(path.resolve('dist', `VERSION-${VERSION}`), `VERSION: ${VERSION}`, (err) => {
      if (err) {
        reject(err)
      }
      spinner.stop()
      console.log(chalk.green('VERSION file generated'))
      spinner.start()
      resolve()
    })
  })
}

generateTemplateData().then((templateData) => {
  const iosTemplateData = templateData.filter(item => item.name.indexOf('ios-') >= 0)
  const mdTemplateData = templateData.filter(item => item.name.indexOf('md-') >= 0)
  const logoTemplateData = templateData.filter(item => item.name.indexOf('logo-') >= 0)

  if (fs.existsSync(dist)) {
    fs.rmdirSync(dist)
  }
  fs.mkdirSync(dist)
  Promise.all([
    generateVueFile(templateData),
    commonGenerateFile(templateData, 'template-vue-mixin.mst', 'dist/ionicons-mixin.js'),
    commonGenerateFile(templateData, 'template-js.mst', 'dist/ionicons.js'),
    commonGenerateFile(iosTemplateData, 'template-js.mst', 'dist/ionicons-ios.js'),
    commonGenerateFile(mdTemplateData, 'template-js.mst', 'dist/ionicons-md.js'),
    commonGenerateFile(logoTemplateData, 'template-js.mst', 'dist/ionicons-logo.js'),
    commonGenerateFile(templateData, 'template-app-mixin.mst', 'demo/component-mixin.js'),
    generateVersionFile()
  ]).then(() => {
    spinner.stop()
    console.log(chalk.green('Build completed: ' + templateData.length + ' icons'))
  }).catch(() => {
    spinner.stop()
    console.log(chalk.red('Error when build templateData'))
  })

  fs.copyFile('ionicons.css', 'dist/ionicons.css', (err) => {
    if (err) throw err;
    console.log(chalk.green('File css already copied'))
  });
  fs.copyFile('ionicons.scss', 'dist/ionicons.scss', (err) => {
    if (err) throw err;
    console.log(chalk.green('File scss already copied'))
  });
  fs.copyFile('ionicons.less', 'dist/ionicons.less', (err) => {
    if (err) throw err;
    console.log(chalk.green('File less already copied'))
  });
})
