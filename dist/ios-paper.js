import IosPaperIcon from './ios-paper.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPaperIcon.name, IosPaperIcon)
  }
}
IosPaperIcon.install = plugin.install

export default IosPaperIcon
