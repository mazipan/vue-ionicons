import IosPricetagsOutlineIcon from './ios-pricetags-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPricetagsOutlineIcon.name, IosPricetagsOutlineIcon)
  }
}
IosPricetagsOutlineIcon.install = plugin.install

export default IosPricetagsOutlineIcon
