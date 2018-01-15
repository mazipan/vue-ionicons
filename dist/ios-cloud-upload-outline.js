import IosCloudUploadOutlineIcon from './ios-cloud-upload-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloudUploadOutlineIcon.name, IosCloudUploadOutlineIcon)
  }
}
IosCloudUploadOutlineIcon.install = plugin.install

export default IosCloudUploadOutlineIcon
