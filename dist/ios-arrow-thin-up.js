import IosArrowThinUpIcon from './ios-arrow-thin-up.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosArrowThinUpIcon.name, IosArrowThinUpIcon)
  }
}
IosArrowThinUpIcon.install = plugin.install

export default IosArrowThinUpIcon
