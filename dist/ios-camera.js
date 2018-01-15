import IosCameraIcon from './ios-camera.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCameraIcon.name, IosCameraIcon)
  }
}
IosCameraIcon.install = plugin.install

export default IosCameraIcon
