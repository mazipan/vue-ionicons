import SocialUsdOutlineIcon from './social-usd-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialUsdOutlineIcon.name, SocialUsdOutlineIcon)
  }
}
SocialUsdOutlineIcon.install = plugin.install

export default SocialUsdOutlineIcon
