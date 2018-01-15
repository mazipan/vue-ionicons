import IosFilingOutlineIcon from './ios-filing-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFilingOutlineIcon.name, IosFilingOutlineIcon)
  }
}
IosFilingOutlineIcon.install = plugin.install

export default IosFilingOutlineIcon
