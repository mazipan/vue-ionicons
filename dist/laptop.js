import LaptopIcon from './laptop.vue'

const plugin = {
  install: Vue => {
    Vue.component(LaptopIcon.name, LaptopIcon)
  }
}
LaptopIcon.install = plugin.install

export default LaptopIcon
