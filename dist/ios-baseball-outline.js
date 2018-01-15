import IosBaseballOutlineIcon from './ios-baseball-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBaseballOutlineIcon.name, IosBaseballOutlineIcon)
  }
}
IosBaseballOutlineIcon.install = plugin.install

export default IosBaseballOutlineIcon
