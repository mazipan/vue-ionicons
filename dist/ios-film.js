import IosFilmIcon from './ios-film.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFilmIcon.name, IosFilmIcon)
  }
}
IosFilmIcon.install = plugin.install

export default IosFilmIcon
