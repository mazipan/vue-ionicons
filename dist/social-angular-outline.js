import SocialAngularOutlineIcon from './social-angular-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialAngularOutlineIcon.name, SocialAngularOutlineIcon)
  }
}
SocialAngularOutlineIcon.install = plugin.install

export default SocialAngularOutlineIcon
