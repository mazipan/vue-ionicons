import IosRecordingOutlineIcon from './ios-recording-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRecordingOutlineIcon.name, IosRecordingOutlineIcon)
  }
}
IosRecordingOutlineIcon.install = plugin.install

export default IosRecordingOutlineIcon
