import SocialTuxIcon from './social-tux.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialTuxIcon.name, SocialTuxIcon)
  }
}
SocialTuxIcon.install = plugin.install

export default SocialTuxIcon
