import IosColorWandOutlineIcon from './ios-color-wand-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosColorWandOutlineIcon.name, IosColorWandOutlineIcon)
  }
}
IosColorWandOutlineIcon.install = plugin.install

export default IosColorWandOutlineIcon
