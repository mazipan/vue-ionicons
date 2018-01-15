import RefreshIcon from './refresh.vue'

const plugin = {
  install: Vue => {
    Vue.component(RefreshIcon.name, RefreshIcon)
  }
}
RefreshIcon.install = plugin.install

export default RefreshIcon
