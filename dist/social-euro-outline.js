import SocialEuroOutlineIcon from './social-euro-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialEuroOutlineIcon.name, SocialEuroOutlineIcon)
  }
}
SocialEuroOutlineIcon.install = plugin.install

export default SocialEuroOutlineIcon
