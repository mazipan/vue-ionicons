import IosInfiniteOutlineIcon from './ios-infinite-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosInfiniteOutlineIcon.name, IosInfiniteOutlineIcon)
  }
}
IosInfiniteOutlineIcon.install = plugin.install

export default IosInfiniteOutlineIcon
