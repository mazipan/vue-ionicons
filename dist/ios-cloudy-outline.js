import IosCloudyOutlineIcon from './ios-cloudy-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloudyOutlineIcon.name, IosCloudyOutlineIcon)
  }
}
IosCloudyOutlineIcon.install = plugin.install

export default IosCloudyOutlineIcon
