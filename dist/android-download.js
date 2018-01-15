import AndroidDownloadIcon from './android-download.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidDownloadIcon.name, AndroidDownloadIcon)
  }
}
AndroidDownloadIcon.install = plugin.install

export default AndroidDownloadIcon
