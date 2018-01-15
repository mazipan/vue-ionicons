import AndroidCheckboxOutlineIcon from './android-checkbox-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCheckboxOutlineIcon.name, AndroidCheckboxOutlineIcon)
  }
}
AndroidCheckboxOutlineIcon.install = plugin.install

export default AndroidCheckboxOutlineIcon
