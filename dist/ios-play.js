import IosPlayIcon from './ios-play.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPlayIcon.name, IosPlayIcon)
  }
}
IosPlayIcon.install = plugin.install

export default IosPlayIcon
