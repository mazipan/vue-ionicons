import IosCircleOutlineIcon from './ios-circle-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCircleOutlineIcon.name, IosCircleOutlineIcon)
  }
}
IosCircleOutlineIcon.install = plugin.install

export default IosCircleOutlineIcon
