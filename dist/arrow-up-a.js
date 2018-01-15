import ArrowUpAIcon from './arrow-up-a.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowUpAIcon.name, ArrowUpAIcon)
  }
}
ArrowUpAIcon.install = plugin.install

export default ArrowUpAIcon
