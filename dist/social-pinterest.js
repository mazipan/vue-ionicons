import SocialPinterestIcon from './social-pinterest.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialPinterestIcon.name, SocialPinterestIcon)
  }
}
SocialPinterestIcon.install = plugin.install

export default SocialPinterestIcon
