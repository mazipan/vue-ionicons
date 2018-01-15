import ShuffleIcon from './shuffle.vue'

const plugin = {
  install: Vue => {
    Vue.component(ShuffleIcon.name, ShuffleIcon)
  }
}
ShuffleIcon.install = plugin.install

export default ShuffleIcon
