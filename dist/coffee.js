import CoffeeIcon from './coffee.vue'

const plugin = {
  install: Vue => {
    Vue.component(CoffeeIcon.name, CoffeeIcon)
  }
}
CoffeeIcon.install = plugin.install

export default CoffeeIcon
