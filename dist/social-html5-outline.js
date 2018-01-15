import SocialHtml5OutlineIcon from './social-html5-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialHtml5OutlineIcon.name, SocialHtml5OutlineIcon)
  }
}
SocialHtml5OutlineIcon.install = plugin.install

export default SocialHtml5OutlineIcon
