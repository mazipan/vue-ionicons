import AndroidMicrophoneIcon from './android-microphone.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidMicrophoneIcon.name, AndroidMicrophoneIcon)
  }
}
AndroidMicrophoneIcon.install = plugin.install

export default AndroidMicrophoneIcon
