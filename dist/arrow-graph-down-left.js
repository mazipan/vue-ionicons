import ArrowGraphDownLeftIcon from './arrow-graph-down-left.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowGraphDownLeftIcon.name, ArrowGraphDownLeftIcon)
  }
}
ArrowGraphDownLeftIcon.install = plugin.install

export default ArrowGraphDownLeftIcon
