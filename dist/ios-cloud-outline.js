import IosCloudOutlineIcon from './ios-cloud-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloudOutlineIcon.name, IosCloudOutlineIcon)
  }
}
IosCloudOutlineIcon.install = plugin.install

export default IosCloudOutlineIcon
