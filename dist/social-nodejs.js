import SocialNodejsIcon from './social-nodejs.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialNodejsIcon.name, SocialNodejsIcon)
  }
}
SocialNodejsIcon.install = plugin.install

export default SocialNodejsIcon
