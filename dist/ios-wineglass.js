import IosWineglassIcon from './ios-wineglass.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosWineglassIcon.name, IosWineglassIcon)
  }
}
IosWineglassIcon.install = plugin.install

export default IosWineglassIcon
