import IosBrowsersIcon from './ios-browsers.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBrowsersIcon.name, IosBrowsersIcon)
  }
}
IosBrowsersIcon.install = plugin.install

export default IosBrowsersIcon
