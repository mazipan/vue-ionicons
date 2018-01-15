import AndroidWifiIcon from './android-wifi.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidWifiIcon.name, AndroidWifiIcon)
  }
}
AndroidWifiIcon.install = plugin.install

export default AndroidWifiIcon
