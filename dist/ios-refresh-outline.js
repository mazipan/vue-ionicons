import IosRefreshOutlineIcon from './ios-refresh-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRefreshOutlineIcon.name, IosRefreshOutlineIcon)
  }
}
IosRefreshOutlineIcon.install = plugin.install

export default IosRefreshOutlineIcon
