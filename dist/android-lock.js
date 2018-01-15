import AndroidLockIcon from './android-lock.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidLockIcon.name, AndroidLockIcon)
  }
}
AndroidLockIcon.install = plugin.install

export default AndroidLockIcon
