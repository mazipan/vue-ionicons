import IosWineglassOutlineIcon from './ios-wineglass-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosWineglassOutlineIcon.name, IosWineglassOutlineIcon)
  }
}
IosWineglassOutlineIcon.install = plugin.install

export default IosWineglassOutlineIcon
