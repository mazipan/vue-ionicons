import IosCloudyIcon from './ios-cloudy.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloudyIcon.name, IosCloudyIcon)
  }
}
IosCloudyIcon.install = plugin.install

export default IosCloudyIcon
