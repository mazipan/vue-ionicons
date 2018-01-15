import AndroidCheckmarkCircleIcon from './android-checkmark-circle.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCheckmarkCircleIcon.name, AndroidCheckmarkCircleIcon)
  }
}
AndroidCheckmarkCircleIcon.install = plugin.install

export default AndroidCheckmarkCircleIcon
