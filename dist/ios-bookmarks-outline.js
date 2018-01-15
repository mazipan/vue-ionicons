import IosBookmarksOutlineIcon from './ios-bookmarks-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBookmarksOutlineIcon.name, IosBookmarksOutlineIcon)
  }
}
IosBookmarksOutlineIcon.install = plugin.install

export default IosBookmarksOutlineIcon
