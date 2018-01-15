import IosFootballOutlineIcon from './ios-football-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFootballOutlineIcon.name, IosFootballOutlineIcon)
  }
}
IosFootballOutlineIcon.install = plugin.install

export default IosFootballOutlineIcon
