import IosStopwatchOutlineIcon from './ios-stopwatch-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosStopwatchOutlineIcon.name, IosStopwatchOutlineIcon)
  }
}
IosStopwatchOutlineIcon.install = plugin.install

export default IosStopwatchOutlineIcon
