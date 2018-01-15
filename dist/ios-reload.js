import IosReloadIcon from './ios-reload.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosReloadIcon.name, IosReloadIcon)
  }
}
IosReloadIcon.install = plugin.install

export default IosReloadIcon
