import AndroidAppsIcon from './android-apps.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidAppsIcon.name, AndroidAppsIcon)
  }
}
AndroidAppsIcon.install = plugin.install

export default AndroidAppsIcon
