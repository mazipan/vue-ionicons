import IosEyeIcon from './ios-eye.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosEyeIcon.name, IosEyeIcon)
  }
}
IosEyeIcon.install = plugin.install

export default IosEyeIcon
