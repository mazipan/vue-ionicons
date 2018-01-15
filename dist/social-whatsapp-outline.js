import SocialWhatsappOutlineIcon from './social-whatsapp-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialWhatsappOutlineIcon.name, SocialWhatsappOutlineIcon)
  }
}
SocialWhatsappOutlineIcon.install = plugin.install

export default SocialWhatsappOutlineIcon
