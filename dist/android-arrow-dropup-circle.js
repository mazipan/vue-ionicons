import AndroidArrowDropupCircleIcon from './android-arrow-dropup-circle.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArrowDropupCircleIcon.name, AndroidArrowDropupCircleIcon)
  }
}
AndroidArrowDropupCircleIcon.install = plugin.install

export default AndroidArrowDropupCircleIcon
