import IosCloudDownloadOutlineIcon from './ios-cloud-download-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloudDownloadOutlineIcon.name, IosCloudDownloadOutlineIcon)
  }
}
IosCloudDownloadOutlineIcon.install = plugin.install

export default IosCloudDownloadOutlineIcon
