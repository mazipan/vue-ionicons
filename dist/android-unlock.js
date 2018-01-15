import AndroidUnlockIcon from './android-unlock.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidUnlockIcon.name, AndroidUnlockIcon)
  }
}
AndroidUnlockIcon.install = plugin.install

export default AndroidUnlockIcon
