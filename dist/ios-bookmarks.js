import IosBookmarksIcon from './ios-bookmarks.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBookmarksIcon.name, IosBookmarksIcon)
  }
}
IosBookmarksIcon.install = plugin.install

export default IosBookmarksIcon
