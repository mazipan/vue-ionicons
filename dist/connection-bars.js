import ConnectionBarsIcon from './connection-bars.vue'

const plugin = {
  install: Vue => {
    Vue.component(ConnectionBarsIcon.name, ConnectionBarsIcon)
  }
}
ConnectionBarsIcon.install = plugin.install

export default ConnectionBarsIcon
