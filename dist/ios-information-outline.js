import IosInformationOutlineIcon from './ios-information-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosInformationOutlineIcon.name, IosInformationOutlineIcon)
  }
}
IosInformationOutlineIcon.install = plugin.install

export default IosInformationOutlineIcon
