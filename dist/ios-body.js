import IosBodyIcon from './ios-body.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBodyIcon.name, IosBodyIcon)
  }
}
IosBodyIcon.install = plugin.install

export default IosBodyIcon
