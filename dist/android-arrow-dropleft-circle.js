import AndroidArrowDropleftCircleIcon from './android-arrow-dropleft-circle.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArrowDropleftCircleIcon.name, AndroidArrowDropleftCircleIcon)
  }
}
AndroidArrowDropleftCircleIcon.install = plugin.install

export default AndroidArrowDropleftCircleIcon
