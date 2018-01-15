import BatteryHalfIcon from './battery-half.vue'

const plugin = {
  install: Vue => {
    Vue.component(BatteryHalfIcon.name, BatteryHalfIcon)
  }
}
BatteryHalfIcon.install = plugin.install

export default BatteryHalfIcon
