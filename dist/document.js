import DocumentIcon from './document.vue'

const plugin = {
  install: Vue => {
    Vue.component(DocumentIcon.name, DocumentIcon)
  }
}
DocumentIcon.install = plugin.install

export default DocumentIcon
