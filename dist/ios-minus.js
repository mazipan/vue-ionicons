import IosMinusIcon from './ios-minus.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMinusIcon.name, IosMinusIcon)
  }
}
IosMinusIcon.install = plugin.install

export default IosMinusIcon
