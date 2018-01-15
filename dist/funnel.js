import FunnelIcon from './funnel.vue'

const plugin = {
  install: Vue => {
    Vue.component(FunnelIcon.name, FunnelIcon)
  }
}
FunnelIcon.install = plugin.install

export default FunnelIcon
