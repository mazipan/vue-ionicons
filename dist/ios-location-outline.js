import IosLocationOutlineIcon from './ios-location-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosLocationOutlineIcon.name, IosLocationOutlineIcon)
  }
}
IosLocationOutlineIcon.install = plugin.install

export default IosLocationOutlineIcon
