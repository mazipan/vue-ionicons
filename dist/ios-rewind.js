import IosRewindIcon from './ios-rewind.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosRewindIcon.name, IosRewindIcon)
  }
}
IosRewindIcon.install = plugin.install

export default IosRewindIcon
