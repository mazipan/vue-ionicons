import IosPersonaddOutlineIcon from './ios-personadd-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPersonaddOutlineIcon.name, IosPersonaddOutlineIcon)
  }
}
IosPersonaddOutlineIcon.install = plugin.install

export default IosPersonaddOutlineIcon
