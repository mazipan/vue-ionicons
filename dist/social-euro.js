import SocialEuroIcon from './social-euro.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialEuroIcon.name, SocialEuroIcon)
  }
}
SocialEuroIcon.install = plugin.install

export default SocialEuroIcon
