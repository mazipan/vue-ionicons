import ChatbubblesIcon from './chatbubbles.vue'

const plugin = {
  install: Vue => {
    Vue.component(ChatbubblesIcon.name, ChatbubblesIcon)
  }
}
ChatbubblesIcon.install = plugin.install

export default ChatbubblesIcon
