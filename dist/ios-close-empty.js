import IosCloseEmptyIcon from './ios-close-empty.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloseEmptyIcon.name, IosCloseEmptyIcon)
  }
}
IosCloseEmptyIcon.install = plugin.install

export default IosCloseEmptyIcon
