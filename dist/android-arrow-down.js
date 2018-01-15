import AndroidArrowDownIcon from './android-arrow-down.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArrowDownIcon.name, AndroidArrowDownIcon)
  }
}
AndroidArrowDownIcon.install = plugin.install

export default AndroidArrowDownIcon
