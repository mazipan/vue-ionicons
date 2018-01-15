import SocialTwitterIcon from './social-twitter.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialTwitterIcon.name, SocialTwitterIcon)
  }
}
SocialTwitterIcon.install = plugin.install

export default SocialTwitterIcon
