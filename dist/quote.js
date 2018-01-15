import QuoteIcon from './quote.vue'

const plugin = {
  install: Vue => {
    Vue.component(QuoteIcon.name, QuoteIcon)
  }
}
QuoteIcon.install = plugin.install

export default QuoteIcon
