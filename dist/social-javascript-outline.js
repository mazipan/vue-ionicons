import SocialJavascriptOutlineIcon from './social-javascript-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialJavascriptOutlineIcon.name, SocialJavascriptOutlineIcon)
  }
}
SocialJavascriptOutlineIcon.install = plugin.install

export default SocialJavascriptOutlineIcon
