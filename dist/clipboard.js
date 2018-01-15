import ClipboardIcon from './clipboard.vue'

const plugin = {
  install: Vue => {
    Vue.component(ClipboardIcon.name, ClipboardIcon)
  }
}
ClipboardIcon.install = plugin.install

export default ClipboardIcon
