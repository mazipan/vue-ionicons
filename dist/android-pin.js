import AndroidPinIcon from './android-pin.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidPinIcon.name, AndroidPinIcon)
  }
}
AndroidPinIcon.install = plugin.install

export default AndroidPinIcon
