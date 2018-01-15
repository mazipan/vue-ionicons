import SocialYoutubeIcon from './social-youtube.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialYoutubeIcon.name, SocialYoutubeIcon)
  }
}
SocialYoutubeIcon.install = plugin.install

export default SocialYoutubeIcon
