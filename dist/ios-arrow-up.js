import IosArrowUpIcon from './ios-arrow-up.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosArrowUpIcon.name, IosArrowUpIcon)
  }
}
IosArrowUpIcon.install = plugin.install

export default IosArrowUpIcon
