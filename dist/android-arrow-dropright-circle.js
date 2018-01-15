import AndroidArrowDroprightCircleIcon from './android-arrow-dropright-circle.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArrowDroprightCircleIcon.name, AndroidArrowDroprightCircleIcon)
  }
}
AndroidArrowDroprightCircleIcon.install = plugin.install

export default AndroidArrowDroprightCircleIcon
