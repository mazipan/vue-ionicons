import IosIonicOutlineIcon from './ios-ionic-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosIonicOutlineIcon.name, IosIonicOutlineIcon)
  }
}
IosIonicOutlineIcon.install = plugin.install

export default IosIonicOutlineIcon
