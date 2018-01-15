import SpeedometerIcon from './speedometer.vue'

const plugin = {
  install: Vue => {
    Vue.component(SpeedometerIcon.name, SpeedometerIcon)
  }
}
SpeedometerIcon.install = plugin.install

export default SpeedometerIcon
