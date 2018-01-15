import IosFlowerIcon from './ios-flower.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFlowerIcon.name, IosFlowerIcon)
  }
}
IosFlowerIcon.install = plugin.install

export default IosFlowerIcon
