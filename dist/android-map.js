import AndroidMapIcon from './android-map.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidMapIcon.name, AndroidMapIcon)
  }
}
AndroidMapIcon.install = plugin.install

export default AndroidMapIcon
