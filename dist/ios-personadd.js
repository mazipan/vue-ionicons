import IosPersonaddIcon from './ios-personadd.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPersonaddIcon.name, IosPersonaddIcon)
  }
}
IosPersonaddIcon.install = plugin.install

export default IosPersonaddIcon
