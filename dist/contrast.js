import ContrastIcon from './contrast.vue'

const plugin = {
  install: Vue => {
    Vue.component(ContrastIcon.name, ContrastIcon)
  }
}
ContrastIcon.install = plugin.install

export default ContrastIcon
