import IosCalculatorOutlineIcon from './ios-calculator-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCalculatorOutlineIcon.name, IosCalculatorOutlineIcon)
  }
}
IosCalculatorOutlineIcon.install = plugin.install

export default IosCalculatorOutlineIcon
