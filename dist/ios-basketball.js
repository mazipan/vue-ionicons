import IosBasketballIcon from './ios-basketball.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBasketballIcon.name, IosBasketballIcon)
  }
}
IosBasketballIcon.install = plugin.install

export default IosBasketballIcon
