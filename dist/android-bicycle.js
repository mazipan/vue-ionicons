import AndroidBicycleIcon from './android-bicycle.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidBicycleIcon.name, AndroidBicycleIcon)
  }
}
AndroidBicycleIcon.install = plugin.install

export default AndroidBicycleIcon
