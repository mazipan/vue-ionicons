import PricetagIcon from './pricetag.vue'

const plugin = {
  install: Vue => {
    Vue.component(PricetagIcon.name, PricetagIcon)
  }
}
PricetagIcon.install = plugin.install

export default PricetagIcon
