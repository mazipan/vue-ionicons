import ArrowLeftCIcon from './arrow-left-c.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowLeftCIcon.name, ArrowLeftCIcon)
  }
}
ArrowLeftCIcon.install = plugin.install

export default ArrowLeftCIcon
