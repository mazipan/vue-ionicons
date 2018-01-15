import ArrowGraphUpRightIcon from './arrow-graph-up-right.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowGraphUpRightIcon.name, ArrowGraphUpRightIcon)
  }
}
ArrowGraphUpRightIcon.install = plugin.install

export default ArrowGraphUpRightIcon
