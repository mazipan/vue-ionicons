import IosBaseballIcon from './ios-baseball.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBaseballIcon.name, IosBaseballIcon)
  }
}
IosBaseballIcon.install = plugin.install

export default IosBaseballIcon
