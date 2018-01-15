import ArrowUpCIcon from './arrow-up-c.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowUpCIcon.name, ArrowUpCIcon)
  }
}
ArrowUpCIcon.install = plugin.install

export default ArrowUpCIcon
