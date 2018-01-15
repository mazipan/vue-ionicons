import IosColorFilterIcon from './ios-color-filter.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosColorFilterIcon.name, IosColorFilterIcon)
  }
}
IosColorFilterIcon.install = plugin.install

export default IosColorFilterIcon
