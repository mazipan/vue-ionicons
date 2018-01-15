import SpoonIcon from './spoon.vue'

const plugin = {
  install: Vue => {
    Vue.component(SpoonIcon.name, SpoonIcon)
  }
}
SpoonIcon.install = plugin.install

export default SpoonIcon
