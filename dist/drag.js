import DragIcon from './drag.vue'

const plugin = {
  install: Vue => {
    Vue.component(DragIcon.name, DragIcon)
  }
}
DragIcon.install = plugin.install

export default DragIcon
