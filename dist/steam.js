import SteamIcon from './steam.vue'

const plugin = {
  install: Vue => {
    Vue.component(SteamIcon.name, SteamIcon)
  }
}
SteamIcon.install = plugin.install

export default SteamIcon
