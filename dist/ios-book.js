import IosBookIcon from './ios-book.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBookIcon.name, IosBookIcon)
  }
}
IosBookIcon.install = plugin.install

export default IosBookIcon
