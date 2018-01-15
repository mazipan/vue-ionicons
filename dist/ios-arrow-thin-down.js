import IosArrowThinDownIcon from './ios-arrow-thin-down.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosArrowThinDownIcon.name, IosArrowThinDownIcon)
  }
}
IosArrowThinDownIcon.install = plugin.install

export default IosArrowThinDownIcon
