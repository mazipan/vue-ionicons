import ArrowRightCIcon from './arrow-right-c.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowRightCIcon.name, ArrowRightCIcon)
  }
}
ArrowRightCIcon.install = plugin.install

export default ArrowRightCIcon
