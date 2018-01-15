import AndroidArrowDroprightIcon from './android-arrow-dropright.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArrowDroprightIcon.name, AndroidArrowDroprightIcon)
  }
}
AndroidArrowDroprightIcon.install = plugin.install

export default AndroidArrowDroprightIcon
