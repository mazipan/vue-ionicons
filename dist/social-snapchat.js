import SocialSnapchatIcon from './social-snapchat.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialSnapchatIcon.name, SocialSnapchatIcon)
  }
}
SocialSnapchatIcon.install = plugin.install

export default SocialSnapchatIcon
