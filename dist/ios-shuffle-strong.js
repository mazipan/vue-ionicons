import IosShuffleStrongIcon from './ios-shuffle-strong.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosShuffleStrongIcon.name, IosShuffleStrongIcon)
  }
}
IosShuffleStrongIcon.install = plugin.install

export default IosShuffleStrongIcon
