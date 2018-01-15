import LeafIcon from './leaf.vue'

const plugin = {
  install: Vue => {
    Vue.component(LeafIcon.name, LeafIcon)
  }
}
LeafIcon.install = plugin.install

export default LeafIcon
