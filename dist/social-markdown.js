import SocialMarkdownIcon from './social-markdown.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialMarkdownIcon.name, SocialMarkdownIcon)
  }
}
SocialMarkdownIcon.install = plugin.install

export default SocialMarkdownIcon
