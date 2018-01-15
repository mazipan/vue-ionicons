import AndroidBoatIcon from './android-boat.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidBoatIcon.name, AndroidBoatIcon)
  }
}
AndroidBoatIcon.install = plugin.install

export default AndroidBoatIcon
