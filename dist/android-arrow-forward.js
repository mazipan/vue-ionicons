import AndroidArrowForwardIcon from './android-arrow-forward.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArrowForwardIcon.name, AndroidArrowForwardIcon)
  }
}
AndroidArrowForwardIcon.install = plugin.install

export default AndroidArrowForwardIcon
