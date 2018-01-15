import SocialAndroidIcon from './social-android.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialAndroidIcon.name, SocialAndroidIcon)
  }
}
SocialAndroidIcon.install = plugin.install

export default SocialAndroidIcon
