import AndroidArrowBackIcon from './android-arrow-back.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArrowBackIcon.name, AndroidArrowBackIcon)
  }
}
AndroidArrowBackIcon.install = plugin.install

export default AndroidArrowBackIcon
