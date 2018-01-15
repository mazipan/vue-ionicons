import FilmMarkerIcon from './film-marker.vue'

const plugin = {
  install: Vue => {
    Vue.component(FilmMarkerIcon.name, FilmMarkerIcon)
  }
}
FilmMarkerIcon.install = plugin.install

export default FilmMarkerIcon
