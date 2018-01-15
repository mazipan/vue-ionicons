import IosCloudyNightIcon from './ios-cloudy-night.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloudyNightIcon.name, IosCloudyNightIcon)
  }
}
IosCloudyNightIcon.install = plugin.install

export default IosCloudyNightIcon
