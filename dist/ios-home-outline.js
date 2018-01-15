import IosHomeOutlineIcon from './ios-home-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosHomeOutlineIcon.name, IosHomeOutlineIcon)
  }
}
IosHomeOutlineIcon.install = plugin.install

export default IosHomeOutlineIcon
