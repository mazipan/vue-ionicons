import AndroidCloseIcon from './android-close.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCloseIcon.name, AndroidCloseIcon)
  }
}
AndroidCloseIcon.install = plugin.install

export default AndroidCloseIcon
