import SocialHackernewsIcon from './social-hackernews.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialHackernewsIcon.name, SocialHackernewsIcon)
  }
}
SocialHackernewsIcon.install = plugin.install

export default SocialHackernewsIcon
