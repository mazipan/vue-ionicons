import IosVolumeHighIcon from './ios-volume-high.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosVolumeHighIcon.name, IosVolumeHighIcon)
  }
}
IosVolumeHighIcon.install = plugin.install

export default IosVolumeHighIcon
