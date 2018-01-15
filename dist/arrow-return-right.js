import ArrowReturnRightIcon from './arrow-return-right.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowReturnRightIcon.name, ArrowReturnRightIcon)
  }
}
ArrowReturnRightIcon.install = plugin.install

export default ArrowReturnRightIcon
