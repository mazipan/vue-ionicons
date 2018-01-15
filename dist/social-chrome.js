import SocialChromeIcon from './social-chrome.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialChromeIcon.name, SocialChromeIcon)
  }
}
SocialChromeIcon.install = plugin.install

export default SocialChromeIcon
