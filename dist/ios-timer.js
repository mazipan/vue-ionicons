import IosTimerIcon from './ios-timer.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosTimerIcon.name, IosTimerIcon)
  }
}
IosTimerIcon.install = plugin.install

export default IosTimerIcon
