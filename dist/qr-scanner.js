import QrScannerIcon from './qr-scanner.vue'

const plugin = {
  install: Vue => {
    Vue.component(QrScannerIcon.name, QrScannerIcon)
  }
}
QrScannerIcon.install = plugin.install

export default QrScannerIcon
