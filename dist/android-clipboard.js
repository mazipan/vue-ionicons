import AndroidClipboardIcon from './android-clipboard.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidClipboardIcon.name, AndroidClipboardIcon)
  }
}
AndroidClipboardIcon.install = plugin.install

export default AndroidClipboardIcon
