import IosCheckmarkIcon from './ios-checkmark.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCheckmarkIcon.name, IosCheckmarkIcon)
  }
}
IosCheckmarkIcon.install = plugin.install

export default IosCheckmarkIcon
