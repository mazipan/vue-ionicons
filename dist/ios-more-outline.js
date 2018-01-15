import IosMoreOutlineIcon from './ios-more-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMoreOutlineIcon.name, IosMoreOutlineIcon)
  }
}
IosMoreOutlineIcon.install = plugin.install

export default IosMoreOutlineIcon
