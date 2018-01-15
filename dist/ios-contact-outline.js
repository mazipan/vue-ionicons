import IosContactOutlineIcon from './ios-contact-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosContactOutlineIcon.name, IosContactOutlineIcon)
  }
}
IosContactOutlineIcon.install = plugin.install

export default IosContactOutlineIcon
