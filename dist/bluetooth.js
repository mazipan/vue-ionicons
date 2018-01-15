import BluetoothIcon from './bluetooth.vue'

const plugin = {
  install: Vue => {
    Vue.component(BluetoothIcon.name, BluetoothIcon)
  }
}
BluetoothIcon.install = plugin.install

export default BluetoothIcon
