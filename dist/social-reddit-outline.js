import SocialRedditOutlineIcon from './social-reddit-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialRedditOutlineIcon.name, SocialRedditOutlineIcon)
  }
}
SocialRedditOutlineIcon.install = plugin.install

export default SocialRedditOutlineIcon
