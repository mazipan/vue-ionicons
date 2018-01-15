import IosArrowBackIcon from './ios-arrow-back.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosArrowBackIcon.name, IosArrowBackIcon)
  }
}
IosArrowBackIcon.install = plugin.install

export default IosArrowBackIcon
