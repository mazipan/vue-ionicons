import AndroidCheckboxBlankIcon from './android-checkbox-blank.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCheckboxBlankIcon.name, AndroidCheckboxBlankIcon)
  }
}
AndroidCheckboxBlankIcon.install = plugin.install

export default AndroidCheckboxBlankIcon
