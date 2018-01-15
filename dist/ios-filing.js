import IosFilingIcon from './ios-filing.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFilingIcon.name, IosFilingIcon)
  }
}
IosFilingIcon.install = plugin.install

export default IosFilingIcon
