import AndroidDoneIcon from './android-done.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidDoneIcon.name, AndroidDoneIcon)
  }
}
AndroidDoneIcon.install = plugin.install

export default AndroidDoneIcon
