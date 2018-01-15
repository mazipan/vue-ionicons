import SocialYenIcon from './social-yen.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialYenIcon.name, SocialYenIcon)
  }
}
SocialYenIcon.install = plugin.install

export default SocialYenIcon
