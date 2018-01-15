import IosPartlysunnyIcon from './ios-partlysunny.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPartlysunnyIcon.name, IosPartlysunnyIcon)
  }
}
IosPartlysunnyIcon.install = plugin.install

export default IosPartlysunnyIcon
