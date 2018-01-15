import SocialTumblrOutlineIcon from './social-tumblr-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialTumblrOutlineIcon.name, SocialTumblrOutlineIcon)
  }
}
SocialTumblrOutlineIcon.install = plugin.install

export default SocialTumblrOutlineIcon
