import IosWorldIcon from './ios-world.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosWorldIcon.name, IosWorldIcon)
  }
}
IosWorldIcon.install = plugin.install

export default IosWorldIcon
