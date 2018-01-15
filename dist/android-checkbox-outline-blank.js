import AndroidCheckboxOutlineBlankIcon from './android-checkbox-outline-blank.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCheckboxOutlineBlankIcon.name, AndroidCheckboxOutlineBlankIcon)
  }
}
AndroidCheckboxOutlineBlankIcon.install = plugin.install

export default AndroidCheckboxOutlineBlankIcon
