import VolumeMediumIcon from './volume-medium.vue'

const plugin = {
  install: Vue => {
    Vue.component(VolumeMediumIcon.name, VolumeMediumIcon)
  }
}
VolumeMediumIcon.install = plugin.install

export default VolumeMediumIcon
