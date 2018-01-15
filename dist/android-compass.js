import AndroidCompassIcon from './android-compass.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCompassIcon.name, AndroidCompassIcon)
  }
}
AndroidCompassIcon.install = plugin.install

export default AndroidCompassIcon
