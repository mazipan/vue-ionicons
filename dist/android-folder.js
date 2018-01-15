import AndroidFolderIcon from './android-folder.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidFolderIcon.name, AndroidFolderIcon)
  }
}
AndroidFolderIcon.install = plugin.install

export default AndroidFolderIcon
