import IosGearIcon from './ios-gear.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosGearIcon.name, IosGearIcon)
  }
}
IosGearIcon.install = plugin.install

export default IosGearIcon
