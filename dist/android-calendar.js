import AndroidCalendarIcon from './android-calendar.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCalendarIcon.name, AndroidCalendarIcon)
  }
}
AndroidCalendarIcon.install = plugin.install

export default AndroidCalendarIcon
