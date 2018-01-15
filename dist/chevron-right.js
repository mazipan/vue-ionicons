import ChevronRightIcon from './chevron-right.vue'

const plugin = {
  install: Vue => {
    Vue.component(ChevronRightIcon.name, ChevronRightIcon)
  }
}
ChevronRightIcon.install = plugin.install

export default ChevronRightIcon
