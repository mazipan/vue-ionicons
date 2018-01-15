import AndroidFavoriteOutlineIcon from './android-favorite-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidFavoriteOutlineIcon.name, AndroidFavoriteOutlineIcon)
  }
}
AndroidFavoriteOutlineIcon.install = plugin.install

export default AndroidFavoriteOutlineIcon
