import SearchIcon from './search.vue'

const plugin = {
  install: Vue => {
    Vue.component(SearchIcon.name, SearchIcon)
  }
}
SearchIcon.install = plugin.install

export default SearchIcon
