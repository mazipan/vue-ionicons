import AndroidExpandIcon from './android-expand.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidExpandIcon.name, AndroidExpandIcon)
  }
}
AndroidExpandIcon.install = plugin.install

export default AndroidExpandIcon
