import SocialYahooIcon from './social-yahoo.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialYahooIcon.name, SocialYahooIcon)
  }
}
SocialYahooIcon.install = plugin.install

export default SocialYahooIcon
