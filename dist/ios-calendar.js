import IosCalendarIcon from './ios-calendar.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCalendarIcon.name, IosCalendarIcon)
  }
}
IosCalendarIcon.install = plugin.install

export default IosCalendarIcon
