import IosGameControllerAOutlineIcon from './ios-game-controller-a-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosGameControllerAOutlineIcon.name, IosGameControllerAOutlineIcon)
  }
}
IosGameControllerAOutlineIcon.install = plugin.install

export default IosGameControllerAOutlineIcon
