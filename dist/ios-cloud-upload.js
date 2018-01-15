import IosCloudUploadIcon from './ios-cloud-upload.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloudUploadIcon.name, IosCloudUploadIcon)
  }
}
IosCloudUploadIcon.install = plugin.install

export default IosCloudUploadIcon
