import SocialYenOutlineIcon from './social-yen-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialYenOutlineIcon.name, SocialYenOutlineIcon)
  }
}
SocialYenOutlineIcon.install = plugin.install

export default SocialYenOutlineIcon
