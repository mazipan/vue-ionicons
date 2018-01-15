import SocialBufferIcon from './social-buffer.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialBufferIcon.name, SocialBufferIcon)
  }
}
SocialBufferIcon.install = plugin.install

export default SocialBufferIcon
