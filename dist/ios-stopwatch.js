import IosStopwatchIcon from './ios-stopwatch.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosStopwatchIcon.name, IosStopwatchIcon)
  }
}
IosStopwatchIcon.install = plugin.install

export default IosStopwatchIcon
