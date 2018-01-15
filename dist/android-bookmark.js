import AndroidBookmarkIcon from './android-bookmark.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidBookmarkIcon.name, AndroidBookmarkIcon)
  }
}
AndroidBookmarkIcon.install = plugin.install

export default AndroidBookmarkIcon
