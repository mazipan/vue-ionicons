import PieGraphIcon from './pie-graph.vue'

const plugin = {
  install: Vue => {
    Vue.component(PieGraphIcon.name, PieGraphIcon)
  }
}
PieGraphIcon.install = plugin.install

export default PieGraphIcon
