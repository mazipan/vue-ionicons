import AndroidMicrophoneOffIcon from './android-microphone-off.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidMicrophoneOffIcon.name, AndroidMicrophoneOffIcon)
  }
}
AndroidMicrophoneOffIcon.install = plugin.install

export default AndroidMicrophoneOffIcon
