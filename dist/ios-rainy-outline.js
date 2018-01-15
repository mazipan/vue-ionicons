import IosRainyOutlineIcon from './ios-rainy-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRainyOutlineIcon.name, IosRainyOutlineIcon)
  }
}
IosRainyOutlineIcon.install = plugin.install

export default IosRainyOutlineIcon
