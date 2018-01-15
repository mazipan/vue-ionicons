import CodeDownloadIcon from './code-download.vue'

const plugin = {
  install: Vue => {
    Vue.component(CodeDownloadIcon.name, CodeDownloadIcon)
  }
}
CodeDownloadIcon.install = plugin.install

export default CodeDownloadIcon
