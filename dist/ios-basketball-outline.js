import IosBasketballOutlineIcon from './ios-basketball-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBasketballOutlineIcon.name, IosBasketballOutlineIcon)
  }
}
IosBasketballOutlineIcon.install = plugin.install

export default IosBasketballOutlineIcon
