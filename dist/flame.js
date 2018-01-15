import FlameIcon from './flame.vue'

const plugin = {
  install: Vue => {
    Vue.component(FlameIcon.name, FlameIcon)
  }
}
FlameIcon.install = plugin.install

export default FlameIcon
