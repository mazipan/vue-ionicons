import AlertIcon from './alert.vue'

const plugin = {
  install: Vue => {
    Vue.component(AlertIcon.name, AlertIcon)
  }
}
AlertIcon.install = plugin.install

export default AlertIcon
