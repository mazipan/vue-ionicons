import CalendarIcon from './calendar.vue'

const plugin = {
  install: Vue => {
    Vue.component(CalendarIcon.name, CalendarIcon)
  }
}
CalendarIcon.install = plugin.install

export default CalendarIcon
