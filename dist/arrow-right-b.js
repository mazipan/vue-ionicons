import ArrowRightBIcon from './arrow-right-b.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowRightBIcon.name, ArrowRightBIcon)
  }
}
ArrowRightBIcon.install = plugin.install

export default ArrowRightBIcon
