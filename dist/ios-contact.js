import IosContactIcon from './ios-contact.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosContactIcon.name, IosContactIcon)
  }
}
IosContactIcon.install = plugin.install

export default IosContactIcon
