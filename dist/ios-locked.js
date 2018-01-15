import IosLockedIcon from './ios-locked.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosLockedIcon.name, IosLockedIcon)
  }
}
IosLockedIcon.install = plugin.install

export default IosLockedIcon
