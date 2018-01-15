import IosBrowsersOutlineIcon from './ios-browsers-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBrowsersOutlineIcon.name, IosBrowsersOutlineIcon)
  }
}
IosBrowsersOutlineIcon.install = plugin.install

export default IosBrowsersOutlineIcon
