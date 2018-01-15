import IosRainyIcon from './ios-rainy.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRainyIcon.name, IosRainyIcon)
  }
}
IosRainyIcon.install = plugin.install

export default IosRainyIcon
