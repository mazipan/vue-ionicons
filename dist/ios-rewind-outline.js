import IosRewindOutlineIcon from './ios-rewind-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRewindOutlineIcon.name, IosRewindOutlineIcon)
  }
}
IosRewindOutlineIcon.install = plugin.install

export default IosRewindOutlineIcon
