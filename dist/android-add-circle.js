import AndroidAddCircleIcon from './android-add-circle.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidAddCircleIcon.name, AndroidAddCircleIcon)
  }
}
AndroidAddCircleIcon.install = plugin.install

export default AndroidAddCircleIcon
