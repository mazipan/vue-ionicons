import SocialWindowsOutlineIcon from './social-windows-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialWindowsOutlineIcon.name, SocialWindowsOutlineIcon)
  }
}
SocialWindowsOutlineIcon.install = plugin.install

export default SocialWindowsOutlineIcon
