import SocialTumblrIcon from './social-tumblr.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialTumblrIcon.name, SocialTumblrIcon)
  }
}
SocialTumblrIcon.install = plugin.install

export default SocialTumblrIcon
