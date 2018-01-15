import BookmarkIcon from './bookmark.vue'

const plugin = {
  install: Vue => {
    Vue.component(BookmarkIcon.name, BookmarkIcon)
  }
}
BookmarkIcon.install = plugin.install

export default BookmarkIcon
