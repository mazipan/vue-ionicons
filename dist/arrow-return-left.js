import ArrowReturnLeftIcon from './arrow-return-left.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowReturnLeftIcon.name, ArrowReturnLeftIcon)
  }
}
ArrowReturnLeftIcon.install = plugin.install

export default ArrowReturnLeftIcon
