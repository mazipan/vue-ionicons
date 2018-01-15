import IosPricetagsIcon from './ios-pricetags.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPricetagsIcon.name, IosPricetagsIcon)
  }
}
IosPricetagsIcon.install = plugin.install

export default IosPricetagsIcon
