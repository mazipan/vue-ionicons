import SocialAndroidOutlineIcon from './social-android-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialAndroidOutlineIcon.name, SocialAndroidOutlineIcon)
  }
}
SocialAndroidOutlineIcon.install = plugin.install

export default SocialAndroidOutlineIcon
