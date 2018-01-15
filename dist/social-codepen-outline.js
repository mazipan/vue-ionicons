import SocialCodepenOutlineIcon from './social-codepen-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialCodepenOutlineIcon.name, SocialCodepenOutlineIcon)
  }
}
SocialCodepenOutlineIcon.install = plugin.install

export default SocialCodepenOutlineIcon
