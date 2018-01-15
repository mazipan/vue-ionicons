import AndroidBusIcon from './android-bus.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidBusIcon.name, AndroidBusIcon)
  }
}
AndroidBusIcon.install = plugin.install

export default AndroidBusIcon
