import SocialCss3Icon from './social-css3.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialCss3Icon.name, SocialCss3Icon)
  }
}
SocialCss3Icon.install = plugin.install

export default SocialCss3Icon
