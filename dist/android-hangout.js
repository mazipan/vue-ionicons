import AndroidHangoutIcon from './android-hangout.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidHangoutIcon.name, AndroidHangoutIcon)
  }
}
AndroidHangoutIcon.install = plugin.install

export default AndroidHangoutIcon
