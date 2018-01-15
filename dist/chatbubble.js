import ChatbubbleIcon from './chatbubble.vue'

const plugin = {
  install: Vue => {
    Vue.component(ChatbubbleIcon.name, ChatbubbleIcon)
  }
}
ChatbubbleIcon.install = plugin.install

export default ChatbubbleIcon
