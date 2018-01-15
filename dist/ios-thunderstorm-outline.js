import IosThunderstormOutlineIcon from './ios-thunderstorm-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosThunderstormOutlineIcon.name, IosThunderstormOutlineIcon)
  }
}
IosThunderstormOutlineIcon.install = plugin.install

export default IosThunderstormOutlineIcon
