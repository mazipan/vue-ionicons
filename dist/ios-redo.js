import IosRedoIcon from './ios-redo.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRedoIcon.name, IosRedoIcon)
  }
}
IosRedoIcon.install = plugin.install

export default IosRedoIcon
