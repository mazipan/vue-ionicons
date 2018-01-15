import PlusIcon from './plus.vue'

const plugin = {
  install: Vue => {
    Vue.component(PlusIcon.name, PlusIcon)
  }
}
PlusIcon.install = plugin.install

export default PlusIcon
