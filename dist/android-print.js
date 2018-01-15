import AndroidPrintIcon from './android-print.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidPrintIcon.name, AndroidPrintIcon)
  }
}
AndroidPrintIcon.install = plugin.install

export default AndroidPrintIcon
