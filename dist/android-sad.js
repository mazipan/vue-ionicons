import AndroidSadIcon from './android-sad.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidSadIcon.name, AndroidSadIcon)
  }
}
AndroidSadIcon.install = plugin.install

export default AndroidSadIcon
