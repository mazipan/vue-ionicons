import AndroidSunnyIcon from './android-sunny.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidSunnyIcon.name, AndroidSunnyIcon)
  }
}
AndroidSunnyIcon.install = plugin.install

export default AndroidSunnyIcon
