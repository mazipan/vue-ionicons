import IosAnalyticsOutlineIcon from './ios-analytics-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosAnalyticsOutlineIcon.name, IosAnalyticsOutlineIcon)
  }
}
IosAnalyticsOutlineIcon.install = plugin.install

export default IosAnalyticsOutlineIcon
