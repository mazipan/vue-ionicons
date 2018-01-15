import IosBarcodeOutlineIcon from './ios-barcode-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBarcodeOutlineIcon.name, IosBarcodeOutlineIcon)
  }
}
IosBarcodeOutlineIcon.install = plugin.install

export default IosBarcodeOutlineIcon
