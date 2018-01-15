import IosComposeOutlineIcon from './ios-compose-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosComposeOutlineIcon.name, IosComposeOutlineIcon)
  }
}
IosComposeOutlineIcon.install = plugin.install

export default IosComposeOutlineIcon
