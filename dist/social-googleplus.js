import SocialGoogleplusIcon from './social-googleplus.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialGoogleplusIcon.name, SocialGoogleplusIcon)
  }
}
SocialGoogleplusIcon.install = plugin.install

export default SocialGoogleplusIcon
