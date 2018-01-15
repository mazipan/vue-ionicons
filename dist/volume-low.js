import VolumeLowIcon from './volume-low.vue'

const plugin = {
  install: Vue => {
    Vue.component(VolumeLowIcon.name, VolumeLowIcon)
  }
}
VolumeLowIcon.install = plugin.install

export default VolumeLowIcon
