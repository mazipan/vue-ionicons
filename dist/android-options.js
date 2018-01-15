import AndroidOptionsIcon from './android-options.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidOptionsIcon.name, AndroidOptionsIcon)
  }
}
AndroidOptionsIcon.install = plugin.install

export default AndroidOptionsIcon
