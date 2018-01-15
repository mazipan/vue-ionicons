import IosFolderOutlineIcon from './ios-folder-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFolderOutlineIcon.name, IosFolderOutlineIcon)
  }
}
IosFolderOutlineIcon.install = plugin.install

export default IosFolderOutlineIcon
