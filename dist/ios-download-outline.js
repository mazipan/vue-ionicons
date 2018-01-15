import IosDownloadOutlineIcon from './ios-download-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosDownloadOutlineIcon.name, IosDownloadOutlineIcon)
  }
}
IosDownloadOutlineIcon.install = plugin.install

export default IosDownloadOutlineIcon
