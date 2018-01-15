import IosAnalyticsIcon from './ios-analytics.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosAnalyticsIcon.name, IosAnalyticsIcon)
  }
}
IosAnalyticsIcon.install = plugin.install

export default IosAnalyticsIcon
