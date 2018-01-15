import IosPrinterIcon from './ios-printer.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPrinterIcon.name, IosPrinterIcon)
  }
}
IosPrinterIcon.install = plugin.install

export default IosPrinterIcon
