import PizzaIcon from './pizza.vue'

const plugin = {
  install: Vue => {
    Vue.component(PizzaIcon.name, PizzaIcon)
  }
}
PizzaIcon.install = plugin.install

export default PizzaIcon
