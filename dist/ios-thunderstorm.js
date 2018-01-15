import IosThunderstormIcon from './ios-thunderstorm.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosThunderstormIcon.name, IosThunderstormIcon)
  }
}
IosThunderstormIcon.install = plugin.install

export default IosThunderstormIcon
