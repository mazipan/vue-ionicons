import SocialBufferOutlineIcon from './social-buffer-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialBufferOutlineIcon.name, SocialBufferOutlineIcon)
  }
}
SocialBufferOutlineIcon.install = plugin.install

export default SocialBufferOutlineIcon
