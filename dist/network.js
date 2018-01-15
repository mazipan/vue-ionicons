import NetworkIcon from './network.vue'

const plugin = {
  install: Vue => {
    Vue.component(NetworkIcon.name, NetworkIcon)
  }
}
NetworkIcon.install = plugin.install

export default NetworkIcon
