import IosToggleOutlineIcon from './ios-toggle-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosToggleOutlineIcon.name, IosToggleOutlineIcon)
  }
}
IosToggleOutlineIcon.install = plugin.install

export default IosToggleOutlineIcon
