import IosUnlockedIcon from './ios-unlocked.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosUnlockedIcon.name, IosUnlockedIcon)
  }
}
IosUnlockedIcon.install = plugin.install

export default IosUnlockedIcon
