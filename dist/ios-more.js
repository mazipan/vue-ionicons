import IosMoreIcon from './ios-more.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMoreIcon.name, IosMoreIcon)
  }
}
IosMoreIcon.install = plugin.install

export default IosMoreIcon
