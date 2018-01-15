import AndroidTimeIcon from './android-time.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidTimeIcon.name, AndroidTimeIcon)
  }
}
AndroidTimeIcon.install = plugin.install

export default AndroidTimeIcon
