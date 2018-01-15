import IosCloseIcon from './ios-close.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloseIcon.name, IosCloseIcon)
  }
}
IosCloseIcon.install = plugin.install

export default IosCloseIcon
