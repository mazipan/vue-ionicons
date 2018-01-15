import IosChatbubbleOutlineIcon from './ios-chatbubble-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosChatbubbleOutlineIcon.name, IosChatbubbleOutlineIcon)
  }
}
IosChatbubbleOutlineIcon.install = plugin.install

export default IosChatbubbleOutlineIcon
