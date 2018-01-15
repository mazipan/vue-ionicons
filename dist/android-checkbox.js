import AndroidCheckboxIcon from './android-checkbox.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCheckboxIcon.name, AndroidCheckboxIcon)
  }
}
AndroidCheckboxIcon.install = plugin.install

export default AndroidCheckboxIcon
