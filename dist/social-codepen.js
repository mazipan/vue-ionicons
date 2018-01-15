import SocialCodepenIcon from './social-codepen.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialCodepenIcon.name, SocialCodepenIcon)
  }
}
SocialCodepenIcon.install = plugin.install

export default SocialCodepenIcon
