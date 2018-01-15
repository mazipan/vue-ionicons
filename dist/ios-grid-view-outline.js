import IosGridViewOutlineIcon from './ios-grid-view-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosGridViewOutlineIcon.name, IosGridViewOutlineIcon)
  }
}
IosGridViewOutlineIcon.install = plugin.install

export default IosGridViewOutlineIcon
