import IosVideocamOutlineIcon from './ios-videocam-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosVideocamOutlineIcon.name, IosVideocamOutlineIcon)
  }
}
IosVideocamOutlineIcon.install = plugin.install

export default IosVideocamOutlineIcon
