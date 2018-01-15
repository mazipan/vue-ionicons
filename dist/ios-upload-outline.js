import IosUploadOutlineIcon from './ios-upload-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosUploadOutlineIcon.name, IosUploadOutlineIcon)
  }
}
IosUploadOutlineIcon.install = plugin.install

export default IosUploadOutlineIcon
