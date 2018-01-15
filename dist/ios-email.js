import IosEmailIcon from './ios-email.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosEmailIcon.name, IosEmailIcon)
  }
}
IosEmailIcon.install = plugin.install

export default IosEmailIcon
