import SocialAppleIcon from './social-apple.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialAppleIcon.name, SocialAppleIcon)
  }
}
SocialAppleIcon.install = plugin.install

export default SocialAppleIcon
