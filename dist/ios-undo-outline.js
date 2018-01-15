import IosUndoOutlineIcon from './ios-undo-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosUndoOutlineIcon.name, IosUndoOutlineIcon)
  }
}
IosUndoOutlineIcon.install = plugin.install

export default IosUndoOutlineIcon
