import ChevronLeftIcon from './chevron-left.vue'

const plugin = {
  install: Vue => {
    Vue.component(ChevronLeftIcon.name, ChevronLeftIcon)
  }
}
ChevronLeftIcon.install = plugin.install

export default ChevronLeftIcon
