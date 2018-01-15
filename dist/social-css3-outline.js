import SocialCss3OutlineIcon from './social-css3-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialCss3OutlineIcon.name, SocialCss3OutlineIcon)
  }
}
SocialCss3OutlineIcon.install = plugin.install

export default SocialCss3OutlineIcon
