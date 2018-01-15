import IosMicOffIcon from './ios-mic-off.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMicOffIcon.name, IosMicOffIcon)
  }
}
IosMicOffIcon.install = plugin.install

export default IosMicOffIcon
