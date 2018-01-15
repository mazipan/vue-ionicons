import IosChatbubbleIcon from './ios-chatbubble.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosChatbubbleIcon.name, IosChatbubbleIcon)
  }
}
IosChatbubbleIcon.install = plugin.install

export default IosChatbubbleIcon
