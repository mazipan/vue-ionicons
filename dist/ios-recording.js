import IosRecordingIcon from './ios-recording.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRecordingIcon.name, IosRecordingIcon)
  }
}
IosRecordingIcon.install = plugin.install

export default IosRecordingIcon
