import IosHelpOutlineIcon from './ios-help-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosHelpOutlineIcon.name, IosHelpOutlineIcon)
  }
}
IosHelpOutlineIcon.install = plugin.install

export default IosHelpOutlineIcon
