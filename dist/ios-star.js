import IosStarIcon from './ios-star.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosStarIcon.name, IosStarIcon)
  }
}
IosStarIcon.install = plugin.install

export default IosStarIcon
