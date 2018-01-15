import RibbonBIcon from './ribbon-b.vue'

const plugin = {
  install: Vue => {
    Vue.component(RibbonBIcon.name, RibbonBIcon)
  }
}
RibbonBIcon.install = plugin.install

export default RibbonBIcon
