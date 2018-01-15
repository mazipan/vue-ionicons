import IosHelpEmptyIcon from './ios-help-empty.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosHelpEmptyIcon.name, IosHelpEmptyIcon)
  }
}
IosHelpEmptyIcon.install = plugin.install

export default IosHelpEmptyIcon
