import IosKeypadOutlineIcon from './ios-keypad-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosKeypadOutlineIcon.name, IosKeypadOutlineIcon)
  }
}
IosKeypadOutlineIcon.install = plugin.install

export default IosKeypadOutlineIcon
