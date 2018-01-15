import AndroidLaptopIcon from './android-laptop.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidLaptopIcon.name, AndroidLaptopIcon)
  }
}
AndroidLaptopIcon.install = plugin.install

export default AndroidLaptopIcon
