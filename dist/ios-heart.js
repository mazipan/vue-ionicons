import IosHeartIcon from './ios-heart.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosHeartIcon.name, IosHeartIcon)
  }
}
IosHeartIcon.install = plugin.install

export default IosHeartIcon
