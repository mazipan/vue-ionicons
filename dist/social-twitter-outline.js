import SocialTwitterOutlineIcon from './social-twitter-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialTwitterOutlineIcon.name, SocialTwitterOutlineIcon)
  }
}
SocialTwitterOutlineIcon.install = plugin.install

export default SocialTwitterOutlineIcon
