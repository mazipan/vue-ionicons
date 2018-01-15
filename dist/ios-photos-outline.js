import IosPhotosOutlineIcon from './ios-photos-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPhotosOutlineIcon.name, IosPhotosOutlineIcon)
  }
}
IosPhotosOutlineIcon.install = plugin.install

export default IosPhotosOutlineIcon
