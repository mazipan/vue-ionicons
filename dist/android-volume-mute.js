import AndroidVolumeMuteIcon from './android-volume-mute.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidVolumeMuteIcon.name, AndroidVolumeMuteIcon)
  }
}
AndroidVolumeMuteIcon.install = plugin.install

export default AndroidVolumeMuteIcon
