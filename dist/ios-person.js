import IosPersonIcon from './ios-person.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPersonIcon.name, IosPersonIcon)
  }
}
IosPersonIcon.install = plugin.install

export default IosPersonIcon
