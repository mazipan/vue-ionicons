import SocialYoutubeOutlineIcon from './social-youtube-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialYoutubeOutlineIcon.name, SocialYoutubeOutlineIcon)
  }
}
SocialYoutubeOutlineIcon.install = plugin.install

export default SocialYoutubeOutlineIcon
