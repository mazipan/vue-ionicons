import IosCloseOutlineIcon from './ios-close-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloseOutlineIcon.name, IosCloseOutlineIcon)
  }
}
IosCloseOutlineIcon.install = plugin.install

export default IosCloseOutlineIcon
