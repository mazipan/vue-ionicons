import IosSpeedometerOutlineIcon from './ios-speedometer-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSpeedometerOutlineIcon.name, IosSpeedometerOutlineIcon)
  }
}
IosSpeedometerOutlineIcon.install = plugin.install

export default IosSpeedometerOutlineIcon
