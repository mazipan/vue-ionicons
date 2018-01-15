import ChevronUpIcon from './chevron-up.vue'

const plugin = {
  install: Vue => {
    Vue.component(ChevronUpIcon.name, ChevronUpIcon)
  }
}
ChevronUpIcon.install = plugin.install

export default ChevronUpIcon
