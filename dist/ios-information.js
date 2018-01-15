import IosInformationIcon from './ios-information.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosInformationIcon.name, IosInformationIcon)
  }
}
IosInformationIcon.install = plugin.install

export default IosInformationIcon
