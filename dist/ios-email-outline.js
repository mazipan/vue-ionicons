import IosEmailOutlineIcon from './ios-email-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosEmailOutlineIcon.name, IosEmailOutlineIcon)
  }
}
IosEmailOutlineIcon.install = plugin.install

export default IosEmailOutlineIcon
