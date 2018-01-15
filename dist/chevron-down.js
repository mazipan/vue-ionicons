import ChevronDownIcon from './chevron-down.vue'

const plugin = {
  install: Vue => {
    Vue.component(ChevronDownIcon.name, ChevronDownIcon)
  }
}
ChevronDownIcon.install = plugin.install

export default ChevronDownIcon
