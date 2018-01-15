import ChatboxesIcon from './chatboxes.vue'

const plugin = {
  install: Vue => {
    Vue.component(ChatboxesIcon.name, ChatboxesIcon)
  }
}
ChatboxesIcon.install = plugin.install

export default ChatboxesIcon
