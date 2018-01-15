import IosGameControllerAIcon from './ios-game-controller-a.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosGameControllerAIcon.name, IosGameControllerAIcon)
  }
}
IosGameControllerAIcon.install = plugin.install

export default IosGameControllerAIcon
