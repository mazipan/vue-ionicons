import AndroidDeleteIcon from './android-delete.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidDeleteIcon.name, AndroidDeleteIcon)
  }
}
AndroidDeleteIcon.install = plugin.install

export default AndroidDeleteIcon
