import AndroidWalkIcon from './android-walk.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidWalkIcon.name, AndroidWalkIcon)
  }
}
AndroidWalkIcon.install = plugin.install

export default AndroidWalkIcon
