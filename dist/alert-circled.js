import AlertCircledIcon from './alert-circled.vue'

const plugin = {
  install: Vue => {
    Vue.component(AlertCircledIcon.name, AlertCircledIcon)
  }
}
AlertCircledIcon.install = plugin.install

export default AlertCircledIcon
