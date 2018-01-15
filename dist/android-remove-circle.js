import AndroidRemoveCircleIcon from './android-remove-circle.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidRemoveCircleIcon.name, AndroidRemoveCircleIcon)
  }
}
AndroidRemoveCircleIcon.install = plugin.install

export default AndroidRemoveCircleIcon
