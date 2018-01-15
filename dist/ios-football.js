import IosFootballIcon from './ios-football.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFootballIcon.name, IosFootballIcon)
  }
}
IosFootballIcon.install = plugin.install

export default IosFootballIcon
