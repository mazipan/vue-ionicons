import IosCloudDownloadIcon from './ios-cloud-download.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloudDownloadIcon.name, IosCloudDownloadIcon)
  }
}
IosCloudDownloadIcon.install = plugin.install

export default IosCloudDownloadIcon
