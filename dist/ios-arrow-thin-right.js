import IosArrowThinRightIcon from './ios-arrow-thin-right.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosArrowThinRightIcon.name, IosArrowThinRightIcon)
  }
}
IosArrowThinRightIcon.install = plugin.install

export default IosArrowThinRightIcon
