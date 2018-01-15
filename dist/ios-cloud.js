import IosCloudIcon from './ios-cloud.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloudIcon.name, IosCloudIcon)
  }
}
IosCloudIcon.install = plugin.install

export default IosCloudIcon
