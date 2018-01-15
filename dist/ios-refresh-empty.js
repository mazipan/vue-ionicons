import IosRefreshEmptyIcon from './ios-refresh-empty.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRefreshEmptyIcon.name, IosRefreshEmptyIcon)
  }
}
IosRefreshEmptyIcon.install = plugin.install

export default IosRefreshEmptyIcon
