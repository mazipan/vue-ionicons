import IosFlameIcon from './ios-flame.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFlameIcon.name, IosFlameIcon)
  }
}
IosFlameIcon.install = plugin.install

export default IosFlameIcon
