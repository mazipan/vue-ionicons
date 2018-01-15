import AndroidFavoriteIcon from './android-favorite.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidFavoriteIcon.name, AndroidFavoriteIcon)
  }
}
AndroidFavoriteIcon.install = plugin.install

export default AndroidFavoriteIcon
