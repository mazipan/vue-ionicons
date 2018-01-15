import SocialSnapchatOutlineIcon from './social-snapchat-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialSnapchatOutlineIcon.name, SocialSnapchatOutlineIcon)
  }
}
SocialSnapchatOutlineIcon.install = plugin.install

export default SocialSnapchatOutlineIcon
