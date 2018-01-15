import IosPlusOutlineIcon from './ios-plus-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPlusOutlineIcon.name, IosPlusOutlineIcon)
  }
}
IosPlusOutlineIcon.install = plugin.install

export default IosPlusOutlineIcon
