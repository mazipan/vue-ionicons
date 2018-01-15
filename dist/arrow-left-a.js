import ArrowLeftAIcon from './arrow-left-a.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowLeftAIcon.name, ArrowLeftAIcon)
  }
}
ArrowLeftAIcon.install = plugin.install

export default ArrowLeftAIcon
