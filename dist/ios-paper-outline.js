import IosPaperOutlineIcon from './ios-paper-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPaperOutlineIcon.name, IosPaperOutlineIcon)
  }
}
IosPaperOutlineIcon.install = plugin.install

export default IosPaperOutlineIcon
