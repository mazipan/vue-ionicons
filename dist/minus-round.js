import MinusRoundIcon from './minus-round.vue'

const plugin = {
  install: Vue => {
    Vue.component(MinusRoundIcon.name, MinusRoundIcon)
  }
}
MinusRoundIcon.install = plugin.install

export default MinusRoundIcon
