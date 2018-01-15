import IosBoxOutlineIcon from './ios-box-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBoxOutlineIcon.name, IosBoxOutlineIcon)
  }
}
IosBoxOutlineIcon.install = plugin.install

export default IosBoxOutlineIcon
