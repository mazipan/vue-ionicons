import AndroidAlertIcon from './android-alert.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidAlertIcon.name, AndroidAlertIcon)
  }
}
AndroidAlertIcon.install = plugin.install

export default AndroidAlertIcon
