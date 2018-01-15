import CameraIcon from './camera.vue'

const plugin = {
  install: Vue => {
    Vue.component(CameraIcon.name, CameraIcon)
  }
}
CameraIcon.install = plugin.install

export default CameraIcon
