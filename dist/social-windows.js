import SocialWindowsIcon from './social-windows.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialWindowsIcon.name, SocialWindowsIcon)
  }
}
SocialWindowsIcon.install = plugin.install

export default SocialWindowsIcon
