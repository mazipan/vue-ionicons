import ThermometerIcon from './thermometer.vue'

const plugin = {
  install: Vue => {
    Vue.component(ThermometerIcon.name, ThermometerIcon)
  }
}
ThermometerIcon.install = plugin.install

export default ThermometerIcon
