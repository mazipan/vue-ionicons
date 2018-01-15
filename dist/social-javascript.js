import SocialJavascriptIcon from './social-javascript.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialJavascriptIcon.name, SocialJavascriptIcon)
  }
}
SocialJavascriptIcon.install = plugin.install

export default SocialJavascriptIcon
