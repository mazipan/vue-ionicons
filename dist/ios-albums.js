import IosAlbumsIcon from './ios-albums.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosAlbumsIcon.name, IosAlbumsIcon)
  }
}
IosAlbumsIcon.install = plugin.install

export default IosAlbumsIcon
