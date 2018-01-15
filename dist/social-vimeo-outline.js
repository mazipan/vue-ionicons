import SocialVimeoOutlineIcon from './social-vimeo-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialVimeoOutlineIcon.name, SocialVimeoOutlineIcon)
  }
}
SocialVimeoOutlineIcon.install = plugin.install

export default SocialVimeoOutlineIcon
