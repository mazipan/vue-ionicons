import AndroidArrowDropdownIcon from './android-arrow-dropdown.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArrowDropdownIcon.name, AndroidArrowDropdownIcon)
  }
}
AndroidArrowDropdownIcon.install = plugin.install

export default AndroidArrowDropdownIcon
