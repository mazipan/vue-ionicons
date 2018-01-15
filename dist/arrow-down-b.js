import ArrowDownBIcon from './arrow-down-b.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowDownBIcon.name, ArrowDownBIcon)
  }
}
ArrowDownBIcon.install = plugin.install

export default ArrowDownBIcon
