import IosAtOutlineIcon from './ios-at-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosAtOutlineIcon.name, IosAtOutlineIcon)
  }
}
IosAtOutlineIcon.install = plugin.install

export default IosAtOutlineIcon
