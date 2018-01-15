import SocialAngularIcon from './social-angular.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialAngularIcon.name, SocialAngularIcon)
  }
}
SocialAngularIcon.install = plugin.install

export default SocialAngularIcon
