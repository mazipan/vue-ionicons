import IosCloudyNightOutlineIcon from './ios-cloudy-night-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCloudyNightOutlineIcon.name, IosCloudyNightOutlineIcon)
  }
}
IosCloudyNightOutlineIcon.install = plugin.install

export default IosCloudyNightOutlineIcon
