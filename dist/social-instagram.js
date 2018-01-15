import SocialInstagramIcon from './social-instagram.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialInstagramIcon.name, SocialInstagramIcon)
  }
}
SocialInstagramIcon.install = plugin.install

export default SocialInstagramIcon
