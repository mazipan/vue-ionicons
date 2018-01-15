import IosTimerOutlineIcon from './ios-timer-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosTimerOutlineIcon.name, IosTimerOutlineIcon)
  }
}
IosTimerOutlineIcon.install = plugin.install

export default IosTimerOutlineIcon
