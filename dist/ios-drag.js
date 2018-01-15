import IosDragIcon from './ios-drag.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosDragIcon.name, IosDragIcon)
  }
}
IosDragIcon.install = plugin.install

export default IosDragIcon
