import IosPersonOutlineIcon from './ios-person-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPersonOutlineIcon.name, IosPersonOutlineIcon)
  }
}
IosPersonOutlineIcon.install = plugin.install

export default IosPersonOutlineIcon
