import SocialWordpressIcon from './social-wordpress.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialWordpressIcon.name, SocialWordpressIcon)
  }
}
SocialWordpressIcon.install = plugin.install

export default SocialWordpressIcon
