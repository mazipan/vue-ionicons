import IosSearchIcon from './ios-search.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSearchIcon.name, IosSearchIcon)
  }
}
IosSearchIcon.install = plugin.install

export default IosSearchIcon
