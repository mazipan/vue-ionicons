import ArrowUpBIcon from './arrow-up-b.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowUpBIcon.name, ArrowUpBIcon)
  }
}
ArrowUpBIcon.install = plugin.install

export default ArrowUpBIcon
