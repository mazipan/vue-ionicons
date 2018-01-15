import BatteryLowIcon from './battery-low.vue'

const plugin = {
  install: Vue => {
    Vue.component(BatteryLowIcon.name, BatteryLowIcon)
  }
}
BatteryLowIcon.install = plugin.install

export default BatteryLowIcon
