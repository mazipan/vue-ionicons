import AndroidArrowDropupIcon from './android-arrow-dropup.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArrowDropupIcon.name, AndroidArrowDropupIcon)
  }
}
AndroidArrowDropupIcon.install = plugin.install

export default AndroidArrowDropupIcon
