const fs = require('fs')
const mustache = require('mustache')
const path = require('path')
const shell = require('shelljs')
const chalk = require('chalk')
const ora = require('ora')

const dist = path.resolve(__dirname, 'dist')
const svgPath = path.resolve(__dirname, 'ionicons/src')

const svgs = fs.readdirSync(svgPath)

console.log(chalk.green('Build starting...'))
var spinner = ora('generating file in progress...')
spinner.start()

shell.config.silent = false
shell.rm('-rf', dist)

const sanitizeSVG = (stream) => {
  let newStream = stream
  newStream = newStream.replace('<?xml version="1.0" encoding="utf-8"?>', '')
  newStream = newStream.replace('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">', '')
  newStream = newStream.replace('<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->">', '')
  newStream = newStream.replace('version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"', '')
  newStream = newStream.replace('style="enable-background:new 0 0 512 512;" xml:space="preserve" x="0px" y="0px"', '')
  newStream = newStream.replace('width="512px" height="512px"', 'width="1em" height="1em"')

  return newStream
}
const getSVGString = (svg) => {
  let stream = fs.readFileSync(path.join(svgPath, svg), {
    encoding: 'utf8'
  });
  stream = sanitizeSVG(stream)

  return stream;
}

const makeHumanReadable = (name) => {
  let array = name.split('-')
  let tempArray = array.map(elm => {
    return elm.charAt(0).toUpperCase() + elm.slice(1)    
  })
  return tempArray.join(' ')
}

let templateData = svgs.map(svgPath => {
  let name = svgPath.slice(0, -4)
  let readableName = makeHumanReadable(name)
  let libraryName = readableName.split(' ').join('')

  return {
    name: name,
    readableName: readableName,
    libraryName: libraryName + 'Icon',
    svg: getSVGString(svgPath)
  } 
})

const generateBuildFile = (template, extension) => {
  let componentFile = fs.readFileSync(template, { encoding: 'utf8'})
  
  for (data of templateData) {
    let component = mustache.render(componentFile, data)
    let filename = data.name + "." + extension
    fs.writeFileSync(path.resolve(dist, filename), component)
  }
}

const templateVue = path.resolve(__dirname, 'template-vue.mst')
const templateJS = path.resolve(__dirname, 'template-js.mst')

setTimeout(function() {
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist)
  }

  generateBuildFile(templateVue, 'vue')
  generateBuildFile(templateJS, 'js') 

  shell.cp('ionicons.css', 'dist/')
  shell.cp('package.json', 'dist/')
  shell.cp('README.md', 'dist/')
  
  spinner.stop()
  console.log(chalk.green('Build completed...'))
}, 2000)
