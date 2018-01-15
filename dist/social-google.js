import SocialGoogleIcon from './social-google.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialGoogleIcon.name, SocialGoogleIcon)
  }
}
SocialGoogleIcon.install = plugin.install

export default SocialGoogleIcon
