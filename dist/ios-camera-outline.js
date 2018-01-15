import IosCameraOutlineIcon from './ios-camera-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCameraOutlineIcon.name, IosCameraOutlineIcon)
  }
}
IosCameraOutlineIcon.install = plugin.install

export default IosCameraOutlineIcon
