import AndroidPlaneIcon from './android-plane.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidPlaneIcon.name, AndroidPlaneIcon)
  }
}
AndroidPlaneIcon.install = plugin.install

export default AndroidPlaneIcon
