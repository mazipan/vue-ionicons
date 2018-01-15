import IosPricetagOutlineIcon from './ios-pricetag-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPricetagOutlineIcon.name, IosPricetagOutlineIcon)
  }
}
IosPricetagOutlineIcon.install = plugin.install

export default IosPricetagOutlineIcon
