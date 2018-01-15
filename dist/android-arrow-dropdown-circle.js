import AndroidArrowDropdownCircleIcon from './android-arrow-dropdown-circle.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArrowDropdownCircleIcon.name, AndroidArrowDropdownCircleIcon)
  }
}
AndroidArrowDropdownCircleIcon.install = plugin.install

export default AndroidArrowDropdownCircleIcon
