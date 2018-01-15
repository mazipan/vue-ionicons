import IosGameControllerBIcon from './ios-game-controller-b.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosGameControllerBIcon.name, IosGameControllerBIcon)
  }
}
IosGameControllerBIcon.install = plugin.install

export default IosGameControllerBIcon
