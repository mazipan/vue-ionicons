import IosMonitorOutlineIcon from './ios-monitor-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMonitorOutlineIcon.name, IosMonitorOutlineIcon)
  }
}
IosMonitorOutlineIcon.install = plugin.install

export default IosMonitorOutlineIcon
