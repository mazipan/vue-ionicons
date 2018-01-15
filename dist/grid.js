import GridIcon from './grid.vue'

const plugin = {
  install: Vue => {
    Vue.component(GridIcon.name, GridIcon)
  }
}
GridIcon.install = plugin.install

export default GridIcon
