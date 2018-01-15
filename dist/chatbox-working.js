import ChatboxWorkingIcon from './chatbox-working.vue'

const plugin = {
  install: Vue => {
    Vue.component(ChatboxWorkingIcon.name, ChatboxWorkingIcon)
  }
}
ChatboxWorkingIcon.install = plugin.install

export default ChatboxWorkingIcon
