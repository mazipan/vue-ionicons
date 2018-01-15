import AndroidShareIcon from './android-share.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidShareIcon.name, AndroidShareIcon)
  }
}
AndroidShareIcon.install = plugin.install

export default AndroidShareIcon
