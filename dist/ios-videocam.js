import IosVideocamIcon from './ios-videocam.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosVideocamIcon.name, IosVideocamIcon)
  }
}
IosVideocamIcon.install = plugin.install

export default IosVideocamIcon
