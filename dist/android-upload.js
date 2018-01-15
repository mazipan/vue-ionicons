import AndroidUploadIcon from './android-upload.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidUploadIcon.name, AndroidUploadIcon)
  }
}
AndroidUploadIcon.install = plugin.install

export default AndroidUploadIcon
