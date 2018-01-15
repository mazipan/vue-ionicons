import IosArrowThinLeftIcon from './ios-arrow-thin-left.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosArrowThinLeftIcon.name, IosArrowThinLeftIcon)
  }
}
IosArrowThinLeftIcon.install = plugin.install

export default IosArrowThinLeftIcon
