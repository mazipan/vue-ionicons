import DocumentTextIcon from './document-text.vue'

const plugin = {
  install: Vue => {
    Vue.component(DocumentTextIcon.name, DocumentTextIcon)
  }
}
DocumentTextIcon.install = plugin.install

export default DocumentTextIcon
