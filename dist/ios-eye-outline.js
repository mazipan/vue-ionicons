import IosEyeOutlineIcon from './ios-eye-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosEyeOutlineIcon.name, IosEyeOutlineIcon)
  }
}
IosEyeOutlineIcon.install = plugin.install

export default IosEyeOutlineIcon
