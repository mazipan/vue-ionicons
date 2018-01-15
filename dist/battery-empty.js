import BatteryEmptyIcon from './battery-empty.vue'

const plugin = {
  install: Vue => {
    Vue.component(BatteryEmptyIcon.name, BatteryEmptyIcon)
  }
}
BatteryEmptyIcon.install = plugin.install

export default BatteryEmptyIcon
