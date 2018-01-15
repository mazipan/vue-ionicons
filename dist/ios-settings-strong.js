import IosSettingsStrongIcon from './ios-settings-strong.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSettingsStrongIcon.name, IosSettingsStrongIcon)
  }
}
IosSettingsStrongIcon.install = plugin.install

export default IosSettingsStrongIcon
