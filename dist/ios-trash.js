import IosTrashIcon from './ios-trash.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosTrashIcon.name, IosTrashIcon)
  }
}
IosTrashIcon.install = plugin.install

export default IosTrashIcon
