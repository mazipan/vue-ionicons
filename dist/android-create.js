import AndroidCreateIcon from './android-create.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCreateIcon.name, AndroidCreateIcon)
  }
}
AndroidCreateIcon.install = plugin.install

export default AndroidCreateIcon
