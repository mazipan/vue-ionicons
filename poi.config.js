const path = require('path')
const { GenerateSW } = require('workbox-webpack-plugin')

const DEMO_DIST = path.resolve(__dirname, 'demo/dist');
const configWB = new GenerateSW({
  swDest: 'sw.js'
})

module.exports = {
  entry: 'demo/main.js',
  output: {
    dir: 'demo/dist',
    publicUrl: '/vue-ionicons/',
  },
  configureWebpack(config) {
    config.plugins.push(configWB)
    return config
  }
}