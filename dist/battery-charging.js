import BatteryChargingIcon from './battery-charging.vue'

const plugin = {
  install: Vue => {
    Vue.component(BatteryChargingIcon.name, BatteryChargingIcon)
  }
}
BatteryChargingIcon.install = plugin.install

export default BatteryChargingIcon
