import AndroidLocateIcon from './android-locate.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidLocateIcon.name, AndroidLocateIcon)
  }
}
AndroidLocateIcon.install = plugin.install

export default AndroidLocateIcon
