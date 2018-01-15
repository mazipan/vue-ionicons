import IosHeartOutlineIcon from './ios-heart-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosHeartOutlineIcon.name, IosHeartOutlineIcon)
  }
}
IosHeartOutlineIcon.install = plugin.install

export default IosHeartOutlineIcon
