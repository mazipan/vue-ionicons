import IosKeypadIcon from './ios-keypad.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosKeypadIcon.name, IosKeypadIcon)
  }
}
IosKeypadIcon.install = plugin.install

export default IosKeypadIcon
