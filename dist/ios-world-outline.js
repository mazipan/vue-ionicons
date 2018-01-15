import IosWorldOutlineIcon from './ios-world-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosWorldOutlineIcon.name, IosWorldOutlineIcon)
  }
}
IosWorldOutlineIcon.install = plugin.install

export default IosWorldOutlineIcon
