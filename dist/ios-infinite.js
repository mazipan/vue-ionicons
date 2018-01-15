import IosInfiniteIcon from './ios-infinite.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosInfiniteIcon.name, IosInfiniteIcon)
  }
}
IosInfiniteIcon.install = plugin.install

export default IosInfiniteIcon
