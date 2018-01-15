import IosPhotosIcon from './ios-photos.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPhotosIcon.name, IosPhotosIcon)
  }
}
IosPhotosIcon.install = plugin.install

export default IosPhotosIcon
