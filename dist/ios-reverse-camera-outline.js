import IosReverseCameraOutlineIcon from './ios-reverse-camera-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosReverseCameraOutlineIcon.name, IosReverseCameraOutlineIcon)
  }
}
IosReverseCameraOutlineIcon.install = plugin.install

export default IosReverseCameraOutlineIcon
