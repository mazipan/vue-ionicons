import AndroidArrowUpIcon from './android-arrow-up.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArrowUpIcon.name, AndroidArrowUpIcon)
  }
}
AndroidArrowUpIcon.install = plugin.install

export default AndroidArrowUpIcon
