import SocialSkypeOutlineIcon from './social-skype-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialSkypeOutlineIcon.name, SocialSkypeOutlineIcon)
  }
}
SocialSkypeOutlineIcon.install = plugin.install

export default SocialSkypeOutlineIcon
