import IosFlowerOutlineIcon from './ios-flower-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFlowerOutlineIcon.name, IosFlowerOutlineIcon)
  }
}
IosFlowerOutlineIcon.install = plugin.install

export default IosFlowerOutlineIcon
