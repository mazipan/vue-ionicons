import SocialFacebookOutlineIcon from './social-facebook-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialFacebookOutlineIcon.name, SocialFacebookOutlineIcon)
  }
}
SocialFacebookOutlineIcon.install = plugin.install

export default SocialFacebookOutlineIcon
