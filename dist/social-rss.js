import SocialRssIcon from './social-rss.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialRssIcon.name, SocialRssIcon)
  }
}
SocialRssIcon.install = plugin.install

export default SocialRssIcon
