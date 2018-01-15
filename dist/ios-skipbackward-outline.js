import IosSkipbackwardOutlineIcon from './ios-skipbackward-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSkipbackwardOutlineIcon.name, IosSkipbackwardOutlineIcon)
  }
}
IosSkipbackwardOutlineIcon.install = plugin.install

export default IosSkipbackwardOutlineIcon
