import IosPlusIcon from './ios-plus.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPlusIcon.name, IosPlusIcon)
  }
}
IosPlusIcon.install = plugin.install

export default IosPlusIcon
