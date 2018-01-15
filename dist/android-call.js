import AndroidCallIcon from './android-call.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCallIcon.name, AndroidCallIcon)
  }
}
AndroidCallIcon.install = plugin.install

export default AndroidCallIcon
