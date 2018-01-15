import TransgenderIcon from './transgender.vue'

const plugin = {
  install: Vue => {
    Vue.component(TransgenderIcon.name, TransgenderIcon)
  }
}
TransgenderIcon.install = plugin.install

export default TransgenderIcon
