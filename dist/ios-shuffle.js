import IosShuffleIcon from './ios-shuffle.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosShuffleIcon.name, IosShuffleIcon)
  }
}
IosShuffleIcon.install = plugin.install

export default IosShuffleIcon
