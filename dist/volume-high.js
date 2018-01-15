import VolumeHighIcon from './volume-high.vue'

const plugin = {
  install: Vue => {
    Vue.component(VolumeHighIcon.name, VolumeHighIcon)
  }
}
VolumeHighIcon.install = plugin.install

export default VolumeHighIcon
