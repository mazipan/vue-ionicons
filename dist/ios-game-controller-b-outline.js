import IosGameControllerBOutlineIcon from './ios-game-controller-b-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosGameControllerBOutlineIcon.name, IosGameControllerBOutlineIcon)
  }
}
IosGameControllerBOutlineIcon.install = plugin.install

export default IosGameControllerBOutlineIcon
