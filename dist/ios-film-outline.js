import IosFilmOutlineIcon from './ios-film-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFilmOutlineIcon.name, IosFilmOutlineIcon)
  }
}
IosFilmOutlineIcon.install = plugin.install

export default IosFilmOutlineIcon
