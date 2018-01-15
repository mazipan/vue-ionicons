import SocialPinterestOutlineIcon from './social-pinterest-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialPinterestOutlineIcon.name, SocialPinterestOutlineIcon)
  }
}
SocialPinterestOutlineIcon.install = plugin.install

export default SocialPinterestOutlineIcon
