import IosArrowForwardIcon from './ios-arrow-forward.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosArrowForwardIcon.name, IosArrowForwardIcon)
  }
}
IosArrowForwardIcon.install = plugin.install

export default IosArrowForwardIcon
