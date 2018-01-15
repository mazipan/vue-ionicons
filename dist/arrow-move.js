import ArrowMoveIcon from './arrow-move.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowMoveIcon.name, ArrowMoveIcon)
  }
}
ArrowMoveIcon.install = plugin.install

export default ArrowMoveIcon
