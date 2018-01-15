import SocialAppleOutlineIcon from './social-apple-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialAppleOutlineIcon.name, SocialAppleOutlineIcon)
  }
}
SocialAppleOutlineIcon.install = plugin.install

export default SocialAppleOutlineIcon
