import IosCalculatorIcon from './ios-calculator.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCalculatorIcon.name, IosCalculatorIcon)
  }
}
IosCalculatorIcon.install = plugin.install

export default IosCalculatorIcon
