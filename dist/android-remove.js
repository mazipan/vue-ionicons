import AndroidRemoveIcon from './android-remove.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidRemoveIcon.name, AndroidRemoveIcon)
  }
}
AndroidRemoveIcon.install = plugin.install

export default AndroidRemoveIcon
