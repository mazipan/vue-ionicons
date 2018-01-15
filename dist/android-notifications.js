import AndroidNotificationsIcon from './android-notifications.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidNotificationsIcon.name, AndroidNotificationsIcon)
  }
}
AndroidNotificationsIcon.install = plugin.install

export default AndroidNotificationsIcon
