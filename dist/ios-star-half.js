import IosStarHalfIcon from './ios-star-half.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosStarHalfIcon.name, IosStarHalfIcon)
  }
}
IosStarHalfIcon.install = plugin.install

export default IosStarHalfIcon
