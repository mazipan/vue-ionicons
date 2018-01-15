import BackspaceOutlineIcon from './backspace-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(BackspaceOutlineIcon.name, BackspaceOutlineIcon)
  }
}
BackspaceOutlineIcon.install = plugin.install

export default BackspaceOutlineIcon
