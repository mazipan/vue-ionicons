import ArrowGraphUpLeftIcon from './arrow-graph-up-left.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowGraphUpLeftIcon.name, ArrowGraphUpLeftIcon)
  }
}
ArrowGraphUpLeftIcon.install = plugin.install

export default ArrowGraphUpLeftIcon
