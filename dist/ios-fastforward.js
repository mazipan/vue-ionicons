import IosFastforwardIcon from './ios-fastforward.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFastforwardIcon.name, IosFastforwardIcon)
  }
}
IosFastforwardIcon.install = plugin.install

export default IosFastforwardIcon
