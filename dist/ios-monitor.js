import IosMonitorIcon from './ios-monitor.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMonitorIcon.name, IosMonitorIcon)
  }
}
IosMonitorIcon.install = plugin.install

export default IosMonitorIcon
