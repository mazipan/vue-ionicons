import IosStarOutlineIcon from './ios-star-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosStarOutlineIcon.name, IosStarOutlineIcon)
  }
}
IosStarOutlineIcon.install = plugin.install

export default IosStarOutlineIcon
