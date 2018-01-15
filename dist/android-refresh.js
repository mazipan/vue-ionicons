import AndroidRefreshIcon from './android-refresh.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidRefreshIcon.name, AndroidRefreshIcon)
  }
}
AndroidRefreshIcon.install = plugin.install

export default AndroidRefreshIcon
