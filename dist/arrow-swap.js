import ArrowSwapIcon from './arrow-swap.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowSwapIcon.name, ArrowSwapIcon)
  }
}
ArrowSwapIcon.install = plugin.install

export default ArrowSwapIcon
