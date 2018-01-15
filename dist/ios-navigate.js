import IosNavigateIcon from './ios-navigate.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosNavigateIcon.name, IosNavigateIcon)
  }
}
IosNavigateIcon.install = plugin.install

export default IosNavigateIcon
