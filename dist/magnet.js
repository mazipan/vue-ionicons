import MagnetIcon from './magnet.vue'

const plugin = {
  install: Vue => {
    Vue.component(MagnetIcon.name, MagnetIcon)
  }
}
MagnetIcon.install = plugin.install

export default MagnetIcon
