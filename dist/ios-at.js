import IosAtIcon from './ios-at.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosAtIcon.name, IosAtIcon)
  }
}
IosAtIcon.install = plugin.install

export default IosAtIcon
