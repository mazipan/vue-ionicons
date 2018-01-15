import IosCartIcon from './ios-cart.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCartIcon.name, IosCartIcon)
  }
}
IosCartIcon.install = plugin.install

export default IosCartIcon
