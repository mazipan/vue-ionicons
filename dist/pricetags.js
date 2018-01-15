import PricetagsIcon from './pricetags.vue'

const plugin = {
  install: Vue => {
    Vue.component(PricetagsIcon.name, PricetagsIcon)
  }
}
PricetagsIcon.install = plugin.install

export default PricetagsIcon
