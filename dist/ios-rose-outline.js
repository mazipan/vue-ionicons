import IosRoseOutlineIcon from './ios-rose-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRoseOutlineIcon.name, IosRoseOutlineIcon)
  }
}
IosRoseOutlineIcon.install = plugin.install

export default IosRoseOutlineIcon
