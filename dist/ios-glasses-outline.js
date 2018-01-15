import IosGlassesOutlineIcon from './ios-glasses-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosGlassesOutlineIcon.name, IosGlassesOutlineIcon)
  }
}
IosGlassesOutlineIcon.install = plugin.install

export default IosGlassesOutlineIcon
