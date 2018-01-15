import AndroidStopwatchIcon from './android-stopwatch.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidStopwatchIcon.name, AndroidStopwatchIcon)
  }
}
AndroidStopwatchIcon.install = plugin.install

export default AndroidStopwatchIcon
