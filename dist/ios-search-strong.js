import IosSearchStrongIcon from './ios-search-strong.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSearchStrongIcon.name, IosSearchStrongIcon)
  }
}
IosSearchStrongIcon.install = plugin.install

export default IosSearchStrongIcon
