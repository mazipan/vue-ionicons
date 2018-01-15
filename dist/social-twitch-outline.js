import SocialTwitchOutlineIcon from './social-twitch-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialTwitchOutlineIcon.name, SocialTwitchOutlineIcon)
  }
}
SocialTwitchOutlineIcon.install = plugin.install

export default SocialTwitchOutlineIcon
