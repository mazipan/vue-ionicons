import IosPaperplaneIcon from './ios-paperplane.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPaperplaneIcon.name, IosPaperplaneIcon)
  }
}
IosPaperplaneIcon.install = plugin.install

export default IosPaperplaneIcon
