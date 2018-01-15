import IosCheckmarkOutlineIcon from './ios-checkmark-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCheckmarkOutlineIcon.name, IosCheckmarkOutlineIcon)
  }
}
IosCheckmarkOutlineIcon.install = plugin.install

export default IosCheckmarkOutlineIcon
