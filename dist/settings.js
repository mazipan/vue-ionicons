import SettingsIcon from './settings.vue'

const plugin = {
  install: Vue => {
    Vue.component(SettingsIcon.name, SettingsIcon)
  }
}
SettingsIcon.install = plugin.install

export default SettingsIcon
