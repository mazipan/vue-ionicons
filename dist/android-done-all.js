import AndroidDoneAllIcon from './android-done-all.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidDoneAllIcon.name, AndroidDoneAllIcon)
  }
}
AndroidDoneAllIcon.install = plugin.install

export default AndroidDoneAllIcon
