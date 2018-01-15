import ArrowDownCIcon from './arrow-down-c.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowDownCIcon.name, ArrowDownCIcon)
  }
}
ArrowDownCIcon.install = plugin.install

export default ArrowDownCIcon
