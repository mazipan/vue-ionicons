import UploadIcon from './upload.vue'

const plugin = {
  install: Vue => {
    Vue.component(UploadIcon.name, UploadIcon)
  }
}
UploadIcon.install = plugin.install

export default UploadIcon
