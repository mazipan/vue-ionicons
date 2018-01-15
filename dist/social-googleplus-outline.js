import SocialGoogleplusOutlineIcon from './social-googleplus-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialGoogleplusOutlineIcon.name, SocialGoogleplusOutlineIcon)
  }
}
SocialGoogleplusOutlineIcon.install = plugin.install

export default SocialGoogleplusOutlineIcon
