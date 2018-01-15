import AndroidMailIcon from './android-mail.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidMailIcon.name, AndroidMailIcon)
  }
}
AndroidMailIcon.install = plugin.install

export default AndroidMailIcon
