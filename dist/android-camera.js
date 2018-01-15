import AndroidCameraIcon from './android-camera.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCameraIcon.name, AndroidCameraIcon)
  }
}
AndroidCameraIcon.install = plugin.install

export default AndroidCameraIcon
