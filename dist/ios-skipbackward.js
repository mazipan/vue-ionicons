import IosSkipbackwardIcon from './ios-skipbackward.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSkipbackwardIcon.name, IosSkipbackwardIcon)
  }
}
IosSkipbackwardIcon.install = plugin.install

export default IosSkipbackwardIcon
