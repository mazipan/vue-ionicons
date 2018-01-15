import SocialSassIcon from './social-sass.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialSassIcon.name, SocialSassIcon)
  }
}
SocialSassIcon.install = plugin.install

export default SocialSassIcon
