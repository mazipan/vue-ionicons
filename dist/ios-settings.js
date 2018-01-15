import IosSettingsIcon from './ios-settings.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSettingsIcon.name, IosSettingsIcon)
  }
}
IosSettingsIcon.install = plugin.install

export default IosSettingsIcon
