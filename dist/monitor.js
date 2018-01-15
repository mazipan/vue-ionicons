import MonitorIcon from './monitor.vue'

const plugin = {
  install: Vue => {
    Vue.component(MonitorIcon.name, MonitorIcon)
  }
}
MonitorIcon.install = plugin.install

export default MonitorIcon
