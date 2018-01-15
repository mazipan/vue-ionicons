import AndroidAddIcon from './android-add.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidAddIcon.name, AndroidAddIcon)
  }
}
AndroidAddIcon.install = plugin.install

export default AndroidAddIcon
