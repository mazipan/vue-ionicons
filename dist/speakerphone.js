import SpeakerphoneIcon from './speakerphone.vue'

const plugin = {
  install: Vue => {
    Vue.component(SpeakerphoneIcon.name, SpeakerphoneIcon)
  }
}
SpeakerphoneIcon.install = plugin.install

export default SpeakerphoneIcon
