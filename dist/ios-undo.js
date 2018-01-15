import IosUndoIcon from './ios-undo.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosUndoIcon.name, IosUndoIcon)
  }
}
IosUndoIcon.install = plugin.install

export default IosUndoIcon
