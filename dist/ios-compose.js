import IosComposeIcon from './ios-compose.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosComposeIcon.name, IosComposeIcon)
  }
}
IosComposeIcon.install = plugin.install

export default IosComposeIcon
