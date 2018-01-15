import BackspaceIcon from './backspace.vue'

const plugin = {
  install: Vue => {
    Vue.component(BackspaceIcon.name, BackspaceIcon)
  }
}
BackspaceIcon.install = plugin.install

export default BackspaceIcon
