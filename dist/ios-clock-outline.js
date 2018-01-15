import IosClockOutlineIcon from './ios-clock-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosClockOutlineIcon.name, IosClockOutlineIcon)
  }
}
IosClockOutlineIcon.install = plugin.install

export default IosClockOutlineIcon
