import VolumeMuteIcon from './volume-mute.vue'

const plugin = {
  install: Vue => {
    Vue.component(VolumeMuteIcon.name, VolumeMuteIcon)
  }
}
VolumeMuteIcon.install = plugin.install

export default VolumeMuteIcon
