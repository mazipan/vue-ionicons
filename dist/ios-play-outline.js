import IosPlayOutlineIcon from './ios-play-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPlayOutlineIcon.name, IosPlayOutlineIcon)
  }
}
IosPlayOutlineIcon.install = plugin.install

export default IosPlayOutlineIcon
