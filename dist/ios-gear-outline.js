import IosGearOutlineIcon from './ios-gear-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosGearOutlineIcon.name, IosGearOutlineIcon)
  }
}
IosGearOutlineIcon.install = plugin.install

export default IosGearOutlineIcon
