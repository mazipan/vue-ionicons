import SocialRedditIcon from './social-reddit.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialRedditIcon.name, SocialRedditIcon)
  }
}
SocialRedditIcon.install = plugin.install

export default SocialRedditIcon
