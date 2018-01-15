import SocialYahooOutlineIcon from './social-yahoo-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialYahooOutlineIcon.name, SocialYahooOutlineIcon)
  }
}
SocialYahooOutlineIcon.install = plugin.install

export default SocialYahooOutlineIcon
