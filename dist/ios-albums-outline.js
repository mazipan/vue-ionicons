import IosAlbumsOutlineIcon from './ios-albums-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosAlbumsOutlineIcon.name, IosAlbumsOutlineIcon)
  }
}
IosAlbumsOutlineIcon.install = plugin.install

export default IosAlbumsOutlineIcon
