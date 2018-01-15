import SocialRssOutlineIcon from './social-rss-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialRssOutlineIcon.name, SocialRssOutlineIcon)
  }
}
SocialRssOutlineIcon.install = plugin.install

export default SocialRssOutlineIcon
