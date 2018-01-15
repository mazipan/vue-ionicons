import SocialVimeoIcon from './social-vimeo.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialVimeoIcon.name, SocialVimeoIcon)
  }
}
SocialVimeoIcon.install = plugin.install

export default SocialVimeoIcon
