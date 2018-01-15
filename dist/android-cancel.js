import AndroidCancelIcon from './android-cancel.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCancelIcon.name, AndroidCancelIcon)
  }
}
AndroidCancelIcon.install = plugin.install

export default AndroidCancelIcon
