import IosMicOutlineIcon from './ios-mic-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMicOutlineIcon.name, IosMicOutlineIcon)
  }
}
IosMicOutlineIcon.install = plugin.install

export default IosMicOutlineIcon
