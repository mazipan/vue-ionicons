import AndroidFolderOpenIcon from './android-folder-open.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidFolderOpenIcon.name, AndroidFolderOpenIcon)
  }
}
AndroidFolderOpenIcon.install = plugin.install

export default AndroidFolderOpenIcon
