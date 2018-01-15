import SocialBitcoinOutlineIcon from './social-bitcoin-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialBitcoinOutlineIcon.name, SocialBitcoinOutlineIcon)
  }
}
SocialBitcoinOutlineIcon.install = plugin.install

export default SocialBitcoinOutlineIcon
