import IosListIcon from './ios-list.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosListIcon.name, IosListIcon)
  }
}
IosListIcon.install = plugin.install

export default IosListIcon
