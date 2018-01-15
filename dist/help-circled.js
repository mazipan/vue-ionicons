import HelpCircledIcon from './help-circled.vue'

const plugin = {
  install: Vue => {
    Vue.component(HelpCircledIcon.name, HelpCircledIcon)
  }
}
HelpCircledIcon.install = plugin.install

export default HelpCircledIcon
