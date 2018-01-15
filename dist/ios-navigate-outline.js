import IosNavigateOutlineIcon from './ios-navigate-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosNavigateOutlineIcon.name, IosNavigateOutlineIcon)
  }
}
IosNavigateOutlineIcon.install = plugin.install

export default IosNavigateOutlineIcon
