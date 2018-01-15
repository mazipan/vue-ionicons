import SocialBitcoinIcon from './social-bitcoin.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialBitcoinIcon.name, SocialBitcoinIcon)
  }
}
SocialBitcoinIcon.install = plugin.install

export default SocialBitcoinIcon
