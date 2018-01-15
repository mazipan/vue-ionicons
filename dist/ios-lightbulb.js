import IosLightbulbIcon from './ios-lightbulb.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosLightbulbIcon.name, IosLightbulbIcon)
  }
}
IosLightbulbIcon.install = plugin.install

export default IosLightbulbIcon
