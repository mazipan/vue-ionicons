import SocialSkypeIcon from './social-skype.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialSkypeIcon.name, SocialSkypeIcon)
  }
}
SocialSkypeIcon.install = plugin.install

export default SocialSkypeIcon
