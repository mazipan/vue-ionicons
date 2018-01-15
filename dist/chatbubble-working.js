import ChatbubbleWorkingIcon from './chatbubble-working.vue'

const plugin = {
  install: Vue => {
    Vue.component(ChatbubbleWorkingIcon.name, ChatbubbleWorkingIcon)
  }
}
ChatbubbleWorkingIcon.install = plugin.install

export default ChatbubbleWorkingIcon
