import WineglassIcon from './wineglass.vue'

const plugin = {
  install: Vue => {
    Vue.component(WineglassIcon.name, WineglassIcon)
  }
}
WineglassIcon.install = plugin.install

export default WineglassIcon
