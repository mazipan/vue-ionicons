import ArrowShrinkIcon from './arrow-shrink.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowShrinkIcon.name, ArrowShrinkIcon)
  }
}
ArrowShrinkIcon.install = plugin.install

export default ArrowShrinkIcon
