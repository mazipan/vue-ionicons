import UsbIcon from './usb.vue'

const plugin = {
  install: Vue => {
    Vue.component(UsbIcon.name, UsbIcon)
  }
}
UsbIcon.install = plugin.install

export default UsbIcon
