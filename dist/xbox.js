import XboxIcon from './xbox.vue'

const plugin = {
  install: Vue => {
    Vue.component(XboxIcon.name, XboxIcon)
  }
}
XboxIcon.install = plugin.install

export default XboxIcon
