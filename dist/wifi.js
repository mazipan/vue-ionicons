import WifiIcon from './wifi.vue'

const plugin = {
  install: Vue => {
    Vue.component(WifiIcon.name, WifiIcon)
  }
}
WifiIcon.install = plugin.install

export default WifiIcon
