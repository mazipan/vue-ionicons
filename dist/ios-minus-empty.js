import IosMinusEmptyIcon from './ios-minus-empty.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMinusEmptyIcon.name, IosMinusEmptyIcon)
  }
}
IosMinusEmptyIcon.install = plugin.install

export default IosMinusEmptyIcon
