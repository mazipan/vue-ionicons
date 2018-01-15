import AndroidBarIcon from './android-bar.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidBarIcon.name, AndroidBarIcon)
  }
}
AndroidBarIcon.install = plugin.install

export default AndroidBarIcon
