import ArrowLeftBIcon from './arrow-left-b.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowLeftBIcon.name, ArrowLeftBIcon)
  }
}
ArrowLeftBIcon.install = plugin.install

export default ArrowLeftBIcon
