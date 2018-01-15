import SocialTwitchIcon from './social-twitch.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialTwitchIcon.name, SocialTwitchIcon)
  }
}
SocialTwitchIcon.install = plugin.install

export default SocialTwitchIcon
