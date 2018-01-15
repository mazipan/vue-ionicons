import IosArrowRightIcon from './ios-arrow-right.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosArrowRightIcon.name, IosArrowRightIcon)
  }
}
IosArrowRightIcon.install = plugin.install

export default IosArrowRightIcon
