import IosGlassesIcon from './ios-glasses.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosGlassesIcon.name, IosGlassesIcon)
  }
}
IosGlassesIcon.install = plugin.install

export default IosGlassesIcon
