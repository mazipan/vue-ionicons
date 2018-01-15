import AndroidAlarmClockIcon from './android-alarm-clock.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidAlarmClockIcon.name, AndroidAlarmClockIcon)
  }
}
AndroidAlarmClockIcon.install = plugin.install

export default AndroidAlarmClockIcon
