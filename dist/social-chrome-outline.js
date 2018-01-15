import SocialChromeOutlineIcon from './social-chrome-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialChromeOutlineIcon.name, SocialChromeOutlineIcon)
  }
}
SocialChromeOutlineIcon.install = plugin.install

export default SocialChromeOutlineIcon
