import IosArrowLeftIcon from './ios-arrow-left.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosArrowLeftIcon.name, IosArrowLeftIcon)
  }
}
IosArrowLeftIcon.install = plugin.install

export default IosArrowLeftIcon
