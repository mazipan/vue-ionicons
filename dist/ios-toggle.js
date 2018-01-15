import IosToggleIcon from './ios-toggle.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosToggleIcon.name, IosToggleIcon)
  }
}
IosToggleIcon.install = plugin.install

export default IosToggleIcon
