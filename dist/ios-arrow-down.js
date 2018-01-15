import IosArrowDownIcon from './ios-arrow-down.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosArrowDownIcon.name, IosArrowDownIcon)
  }
}
IosArrowDownIcon.install = plugin.install

export default IosArrowDownIcon
