import IosHomeIcon from './ios-home.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosHomeIcon.name, IosHomeIcon)
  }
}
IosHomeIcon.install = plugin.install

export default IosHomeIcon
