import IosListOutlineIcon from './ios-list-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosListOutlineIcon.name, IosListOutlineIcon)
  }
}
IosListOutlineIcon.install = plugin.install

export default IosListOutlineIcon
