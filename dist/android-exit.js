import AndroidExitIcon from './android-exit.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidExitIcon.name, AndroidExitIcon)
  }
}
AndroidExitIcon.install = plugin.install

export default AndroidExitIcon
