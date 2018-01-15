import IosVolumeLowIcon from './ios-volume-low.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosVolumeLowIcon.name, IosVolumeLowIcon)
  }
}
IosVolumeLowIcon.install = plugin.install

export default IosVolumeLowIcon
