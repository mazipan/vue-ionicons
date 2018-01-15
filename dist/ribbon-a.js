import RibbonAIcon from './ribbon-a.vue'

const plugin = {
  install: Vue => {
    Vue.component(RibbonAIcon.name, RibbonAIcon)
  }
}
RibbonAIcon.install = plugin.install

export default RibbonAIcon
