import ArrowDownAIcon from './arrow-down-a.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowDownAIcon.name, ArrowDownAIcon)
  }
}
ArrowDownAIcon.install = plugin.install

export default ArrowDownAIcon
