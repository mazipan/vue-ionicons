import IosUnlockedOutlineIcon from './ios-unlocked-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosUnlockedOutlineIcon.name, IosUnlockedOutlineIcon)
  }
}
IosUnlockedOutlineIcon.install = plugin.install

export default IosUnlockedOutlineIcon
