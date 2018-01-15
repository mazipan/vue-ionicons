import SocialLinkedinOutlineIcon from './social-linkedin-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialLinkedinOutlineIcon.name, SocialLinkedinOutlineIcon)
  }
}
SocialLinkedinOutlineIcon.install = plugin.install

export default SocialLinkedinOutlineIcon
