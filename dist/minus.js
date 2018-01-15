import MinusIcon from './minus.vue'

const plugin = {
  install: Vue => {
    Vue.component(MinusIcon.name, MinusIcon)
  }
}
MinusIcon.install = plugin.install

export default MinusIcon
