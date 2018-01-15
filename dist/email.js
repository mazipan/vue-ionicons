import EmailIcon from './email.vue'

const plugin = {
  install: Vue => {
    Vue.component(EmailIcon.name, EmailIcon)
  }
}
EmailIcon.install = plugin.install

export default EmailIcon
