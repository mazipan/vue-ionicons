import PrinterIcon from './printer.vue'

const plugin = {
  install: Vue => {
    Vue.component(PrinterIcon.name, PrinterIcon)
  }
}
PrinterIcon.install = plugin.install

export default PrinterIcon
