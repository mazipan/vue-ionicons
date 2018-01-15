import IosColorWandIcon from './ios-color-wand.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosColorWandIcon.name, IosColorWandIcon)
  }
}
IosColorWandIcon.install = plugin.install

export default IosColorWandIcon
