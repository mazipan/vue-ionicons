import IosTrashOutlineIcon from './ios-trash-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosTrashOutlineIcon.name, IosTrashOutlineIcon)
  }
}
IosTrashOutlineIcon.install = plugin.install

export default IosTrashOutlineIcon
