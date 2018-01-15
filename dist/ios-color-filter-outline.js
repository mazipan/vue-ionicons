import IosColorFilterOutlineIcon from './ios-color-filter-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosColorFilterOutlineIcon.name, IosColorFilterOutlineIcon)
  }
}
IosColorFilterOutlineIcon.install = plugin.install

export default IosColorFilterOutlineIcon
