import IosTimeOutlineIcon from './ios-time-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosTimeOutlineIcon.name, IosTimeOutlineIcon)
  }
}
IosTimeOutlineIcon.install = plugin.install

export default IosTimeOutlineIcon
