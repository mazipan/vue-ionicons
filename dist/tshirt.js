import TshirtIcon from './tshirt.vue'

const plugin = {
  install: Vue => {
    Vue.component(TshirtIcon.name, TshirtIcon)
  }
}
TshirtIcon.install = plugin.install

export default TshirtIcon
