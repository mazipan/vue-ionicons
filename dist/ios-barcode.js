import IosBarcodeIcon from './ios-barcode.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBarcodeIcon.name, IosBarcodeIcon)
  }
}
IosBarcodeIcon.install = plugin.install

export default IosBarcodeIcon
