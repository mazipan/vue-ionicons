import IosInformationEmptyIcon from './ios-information-empty.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosInformationEmptyIcon.name, IosInformationEmptyIcon)
  }
}
IosInformationEmptyIcon.install = plugin.install

export default IosInformationEmptyIcon
