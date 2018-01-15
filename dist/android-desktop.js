import AndroidDesktopIcon from './android-desktop.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidDesktopIcon.name, AndroidDesktopIcon)
  }
}
AndroidDesktopIcon.install = plugin.install

export default AndroidDesktopIcon
