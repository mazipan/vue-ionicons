import AndroidNotificationsNoneIcon from './android-notifications-none.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidNotificationsNoneIcon.name, AndroidNotificationsNoneIcon)
  }
}
AndroidNotificationsNoneIcon.install = plugin.install

export default AndroidNotificationsNoneIcon
