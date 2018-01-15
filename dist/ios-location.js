import IosLocationIcon from './ios-location.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosLocationIcon.name, IosLocationIcon)
  }
}
IosLocationIcon.install = plugin.install

export default IosLocationIcon
