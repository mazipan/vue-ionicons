import AndroidHomeIcon from './android-home.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidHomeIcon.name, AndroidHomeIcon)
  }
}
AndroidHomeIcon.install = plugin.install

export default AndroidHomeIcon
