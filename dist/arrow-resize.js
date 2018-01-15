import ArrowResizeIcon from './arrow-resize.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowResizeIcon.name, ArrowResizeIcon)
  }
}
ArrowResizeIcon.install = plugin.install

export default ArrowResizeIcon
