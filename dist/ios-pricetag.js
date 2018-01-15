import IosPricetagIcon from './ios-pricetag.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPricetagIcon.name, IosPricetagIcon)
  }
}
IosPricetagIcon.install = plugin.install

export default IosPricetagIcon
