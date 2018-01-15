import IosPaperplaneOutlineIcon from './ios-paperplane-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPaperplaneOutlineIcon.name, IosPaperplaneOutlineIcon)
  }
}
IosPaperplaneOutlineIcon.install = plugin.install

export default IosPaperplaneOutlineIcon
