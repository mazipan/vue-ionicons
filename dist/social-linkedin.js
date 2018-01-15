import SocialLinkedinIcon from './social-linkedin.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialLinkedinIcon.name, SocialLinkedinIcon)
  }
}
SocialLinkedinIcon.install = plugin.install

export default SocialLinkedinIcon
