import AndroidHandIcon from './android-hand.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidHandIcon.name, AndroidHandIcon)
  }
}
AndroidHandIcon.install = plugin.install

export default AndroidHandIcon
