import SocialHtml5Icon from './social-html5.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialHtml5Icon.name, SocialHtml5Icon)
  }
}
SocialHtml5Icon.install = plugin.install

export default SocialHtml5Icon
