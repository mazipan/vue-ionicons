import PaperclipIcon from './paperclip.vue'

const plugin = {
  install: Vue => {
    Vue.component(PaperclipIcon.name, PaperclipIcon)
  }
}
PaperclipIcon.install = plugin.install

export default PaperclipIcon
