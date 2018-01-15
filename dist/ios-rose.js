import IosRoseIcon from './ios-rose.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRoseIcon.name, IosRoseIcon)
  }
}
IosRoseIcon.install = plugin.install

export default IosRoseIcon
