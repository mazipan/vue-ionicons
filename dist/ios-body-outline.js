import IosBodyOutlineIcon from './ios-body-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBodyOutlineIcon.name, IosBodyOutlineIcon)
  }
}
IosBodyOutlineIcon.install = plugin.install

export default IosBodyOutlineIcon
