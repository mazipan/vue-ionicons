import IosCalendarOutlineIcon from './ios-calendar-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCalendarOutlineIcon.name, IosCalendarOutlineIcon)
  }
}
IosCalendarOutlineIcon.install = plugin.install

export default IosCalendarOutlineIcon
