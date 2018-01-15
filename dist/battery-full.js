import BatteryFullIcon from './battery-full.vue'

const plugin = {
  install: Vue => {
    Vue.component(BatteryFullIcon.name, BatteryFullIcon)
  }
}
BatteryFullIcon.install = plugin.install

export default BatteryFullIcon
