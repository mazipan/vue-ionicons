import IosUploadIcon from './ios-upload.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosUploadIcon.name, IosUploadIcon)
  }
}
IosUploadIcon.install = plugin.install

export default IosUploadIcon
