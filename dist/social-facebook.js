import SocialFacebookIcon from './social-facebook.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialFacebookIcon.name, SocialFacebookIcon)
  }
}
SocialFacebookIcon.install = plugin.install

export default SocialFacebookIcon
