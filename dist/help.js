import HelpIcon from './help.vue'

const plugin = {
  install: Vue => {
    Vue.component(HelpIcon.name, HelpIcon)
  }
}
HelpIcon.install = plugin.install

export default HelpIcon
