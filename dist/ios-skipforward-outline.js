import IosSkipforwardOutlineIcon from './ios-skipforward-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSkipforwardOutlineIcon.name, IosSkipforwardOutlineIcon)
  }
}
IosSkipforwardOutlineIcon.install = plugin.install

export default IosSkipforwardOutlineIcon
