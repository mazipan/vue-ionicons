import ArrowGraphDownRightIcon from './arrow-graph-down-right.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowGraphDownRightIcon.name, ArrowGraphDownRightIcon)
  }
}
ArrowGraphDownRightIcon.install = plugin.install

export default ArrowGraphDownRightIcon
