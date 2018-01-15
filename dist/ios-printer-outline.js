import IosPrinterOutlineIcon from './ios-printer-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPrinterOutlineIcon.name, IosPrinterOutlineIcon)
  }
}
IosPrinterOutlineIcon.install = plugin.install

export default IosPrinterOutlineIcon
