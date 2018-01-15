import IosReverseCameraIcon from './ios-reverse-camera.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosReverseCameraIcon.name, IosReverseCameraIcon)
  }
}
IosReverseCameraIcon.install = plugin.install

export default IosReverseCameraIcon
