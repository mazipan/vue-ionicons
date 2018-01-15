import IosHelpIcon from './ios-help.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosHelpIcon.name, IosHelpIcon)
  }
}
IosHelpIcon.install = plugin.install

export default IosHelpIcon
