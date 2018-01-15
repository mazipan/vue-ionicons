import IosMinusOutlineIcon from './ios-minus-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMinusOutlineIcon.name, IosMinusOutlineIcon)
  }
}
IosMinusOutlineIcon.install = plugin.install

export default IosMinusOutlineIcon
