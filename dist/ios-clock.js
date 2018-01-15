import IosClockIcon from './ios-clock.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosClockIcon.name, IosClockIcon)
  }
}
IosClockIcon.install = plugin.install

export default IosClockIcon
