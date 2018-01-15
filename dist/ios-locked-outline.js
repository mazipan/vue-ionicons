import IosLockedOutlineIcon from './ios-locked-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosLockedOutlineIcon.name, IosLockedOutlineIcon)
  }
}
IosLockedOutlineIcon.install = plugin.install

export default IosLockedOutlineIcon
