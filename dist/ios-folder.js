import IosFolderIcon from './ios-folder.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFolderIcon.name, IosFolderIcon)
  }
}
IosFolderIcon.install = plugin.install

export default IosFolderIcon
