import AndroidChatIcon from './android-chat.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidChatIcon.name, AndroidChatIcon)
  }
}
AndroidChatIcon.install = plugin.install

export default AndroidChatIcon
