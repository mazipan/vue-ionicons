import CashIcon from './cash.vue'

const plugin = {
  install: Vue => {
    Vue.component(CashIcon.name, CashIcon)
  }
}
CashIcon.install = plugin.install

export default CashIcon
