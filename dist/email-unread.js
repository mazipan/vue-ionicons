import EmailUnreadIcon from './email-unread.vue'

const plugin = {
  install: Vue => {
    Vue.component(EmailUnreadIcon.name, EmailUnreadIcon)
  }
}
EmailUnreadIcon.install = plugin.install

export default EmailUnreadIcon
