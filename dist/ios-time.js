import IosTimeIcon from './ios-time.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosTimeIcon.name, IosTimeIcon)
  }
}
IosTimeIcon.install = plugin.install

export default IosTimeIcon
