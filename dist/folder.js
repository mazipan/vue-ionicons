import FolderIcon from './folder.vue'

const plugin = {
  install: Vue => {
    Vue.component(FolderIcon.name, FolderIcon)
  }
}
FolderIcon.install = plugin.install

export default FolderIcon
