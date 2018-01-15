import AndroidSettingsIcon from './android-settings.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidSettingsIcon.name, AndroidSettingsIcon)
  }
}
AndroidSettingsIcon.install = plugin.install

export default AndroidSettingsIcon
