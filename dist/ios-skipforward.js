import IosSkipforwardIcon from './ios-skipforward.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSkipforwardIcon.name, IosSkipforwardIcon)
  }
}
IosSkipforwardIcon.install = plugin.install

export default IosSkipforwardIcon
