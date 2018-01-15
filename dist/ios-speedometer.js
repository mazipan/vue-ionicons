import IosSpeedometerIcon from './ios-speedometer.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSpeedometerIcon.name, IosSpeedometerIcon)
  }
}
IosSpeedometerIcon.install = plugin.install

export default IosSpeedometerIcon
