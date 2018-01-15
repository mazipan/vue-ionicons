import AndroidCarIcon from './android-car.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCarIcon.name, AndroidCarIcon)
  }
}
AndroidCarIcon.install = plugin.install

export default AndroidCarIcon
