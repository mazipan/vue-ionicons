import SocialInstagramOutlineIcon from './social-instagram-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialInstagramOutlineIcon.name, SocialInstagramOutlineIcon)
  }
}
SocialInstagramOutlineIcon.install = plugin.install

export default SocialInstagramOutlineIcon
