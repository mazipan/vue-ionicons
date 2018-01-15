import SocialGoogleOutlineIcon from './social-google-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialGoogleOutlineIcon.name, SocialGoogleOutlineIcon)
  }
}
SocialGoogleOutlineIcon.install = plugin.install

export default SocialGoogleOutlineIcon
