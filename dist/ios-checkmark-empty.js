import IosCheckmarkEmptyIcon from './ios-checkmark-empty.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCheckmarkEmptyIcon.name, IosCheckmarkEmptyIcon)
  }
}
IosCheckmarkEmptyIcon.install = plugin.install

export default IosCheckmarkEmptyIcon
