import SocialUsdIcon from './social-usd.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialUsdIcon.name, SocialUsdIcon)
  }
}
SocialUsdIcon.install = plugin.install

export default SocialUsdIcon
