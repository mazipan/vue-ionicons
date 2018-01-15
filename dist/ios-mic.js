import IosMicIcon from './ios-mic.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMicIcon.name, IosMicIcon)
  }
}
IosMicIcon.install = plugin.install

export default IosMicIcon
