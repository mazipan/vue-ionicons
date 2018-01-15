import AndroidOpenIcon from './android-open.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidOpenIcon.name, AndroidOpenIcon)
  }
}
AndroidOpenIcon.install = plugin.install

export default AndroidOpenIcon
