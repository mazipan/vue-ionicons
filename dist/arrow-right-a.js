import ArrowRightAIcon from './arrow-right-a.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowRightAIcon.name, ArrowRightAIcon)
  }
}
ArrowRightAIcon.install = plugin.install

export default ArrowRightAIcon
