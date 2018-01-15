import SocialWhatsappIcon from './social-whatsapp.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialWhatsappIcon.name, SocialWhatsappIcon)
  }
}
SocialWhatsappIcon.install = plugin.install

export default SocialWhatsappIcon
