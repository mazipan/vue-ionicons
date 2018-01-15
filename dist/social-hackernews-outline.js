import SocialHackernewsOutlineIcon from './social-hackernews-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialHackernewsOutlineIcon.name, SocialHackernewsOutlineIcon)
  }
}
SocialHackernewsOutlineIcon.install = plugin.install

export default SocialHackernewsOutlineIcon
