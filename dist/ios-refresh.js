import IosRefreshIcon from './ios-refresh.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRefreshIcon.name, IosRefreshIcon)
  }
}
IosRefreshIcon.install = plugin.install

export default IosRefreshIcon
