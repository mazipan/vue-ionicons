import AndroidFilmIcon from './android-film.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidFilmIcon.name, AndroidFilmIcon)
  }
}
AndroidFilmIcon.install = plugin.install

export default AndroidFilmIcon
