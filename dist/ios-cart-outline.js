import IosCartOutlineIcon from './ios-cart-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCartOutlineIcon.name, IosCartOutlineIcon)
  }
}
IosCartOutlineIcon.install = plugin.install

export default IosCartOutlineIcon
