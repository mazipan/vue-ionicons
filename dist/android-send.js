import AndroidSendIcon from './android-send.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidSendIcon.name, AndroidSendIcon)
  }
}
AndroidSendIcon.install = plugin.install

export default AndroidSendIcon
