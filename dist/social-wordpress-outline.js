import SocialWordpressOutlineIcon from './social-wordpress-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialWordpressOutlineIcon.name, SocialWordpressOutlineIcon)
  }
}
SocialWordpressOutlineIcon.install = plugin.install

export default SocialWordpressOutlineIcon
