import IosGridViewIcon from './ios-grid-view.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosGridViewIcon.name, IosGridViewIcon)
  }
}
IosGridViewIcon.install = plugin.install

export default IosGridViewIcon
