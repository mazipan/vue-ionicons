import AndroidWarningIcon from './android-warning.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidWarningIcon.name, AndroidWarningIcon)
  }
}
AndroidWarningIcon.install = plugin.install

export default AndroidWarningIcon
