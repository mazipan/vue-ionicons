import ChatboxIcon from './chatbox.vue'

const plugin = {
  install: Vue => {
    Vue.component(ChatboxIcon.name, ChatboxIcon)
  }
}
ChatboxIcon.install = plugin.install

export default ChatboxIcon
