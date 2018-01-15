import ArrowExpandIcon from './arrow-expand.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArrowExpandIcon.name, ArrowExpandIcon)
  }
}
ArrowExpandIcon.install = plugin.install

export default ArrowExpandIcon
