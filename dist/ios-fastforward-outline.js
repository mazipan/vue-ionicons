import IosFastforwardOutlineIcon from './ios-fastforward-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFastforwardOutlineIcon.name, IosFastforwardOutlineIcon)
  }
}
IosFastforwardOutlineIcon.install = plugin.install

export default IosFastforwardOutlineIcon
