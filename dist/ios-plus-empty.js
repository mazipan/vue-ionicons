import IosPlusEmptyIcon from './ios-plus-empty.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPlusEmptyIcon.name, IosPlusEmptyIcon)
  }
}
IosPlusEmptyIcon.install = plugin.install

export default IosPlusEmptyIcon
