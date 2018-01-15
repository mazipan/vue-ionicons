import AndroidNotificationsOffIcon from './android-notifications-off.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidNotificationsOffIcon.name, AndroidNotificationsOffIcon)
  }
}
AndroidNotificationsOffIcon.install = plugin.install

export default AndroidNotificationsOffIcon
