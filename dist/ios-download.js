import IosDownloadIcon from './ios-download.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosDownloadIcon.name, IosDownloadIcon)
  }
}
IosDownloadIcon.install = plugin.install

export default IosDownloadIcon
