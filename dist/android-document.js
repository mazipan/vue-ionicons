import AndroidDocumentIcon from './android-document.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidDocumentIcon.name, AndroidDocumentIcon)
  }
}
AndroidDocumentIcon.install = plugin.install

export default AndroidDocumentIcon
