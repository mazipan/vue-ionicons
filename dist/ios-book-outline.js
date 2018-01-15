import IosBookOutlineIcon from './ios-book-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBookOutlineIcon.name, IosBookOutlineIcon)
  }
}
IosBookOutlineIcon.install = plugin.install

export default IosBookOutlineIcon
