import IosRedoOutlineIcon from './ios-redo-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRedoOutlineIcon.name, IosRedoOutlineIcon)
  }
}
IosRedoOutlineIcon.install = plugin.install

export default IosRedoOutlineIcon
