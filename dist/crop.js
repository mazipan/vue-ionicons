import CropIcon from './crop.vue'

const plugin = {
  install: Vue => {
    Vue.component(CropIcon.name, CropIcon)
  }
}
CropIcon.install = plugin.install

export default CropIcon
