import CalculatorIcon from './calculator.vue'

const plugin = {
  install: Vue => {
    Vue.component(CalculatorIcon.name, CalculatorIcon)
  }
}
CalculatorIcon.install = plugin.install

export default CalculatorIcon
