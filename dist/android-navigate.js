import AndroidNavigateIcon from './android-navigate.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidNavigateIcon.name, AndroidNavigateIcon)
  }
}
AndroidNavigateIcon.install = plugin.install

export default AndroidNavigateIcon
