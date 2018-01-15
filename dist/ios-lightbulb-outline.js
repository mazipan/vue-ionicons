import IosLightbulbOutlineIcon from './ios-lightbulb-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosLightbulbOutlineIcon.name, IosLightbulbOutlineIcon)
  }
}
IosLightbulbOutlineIcon.install = plugin.install

export default IosLightbulbOutlineIcon
