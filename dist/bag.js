import BagIcon from './bag.vue'

const plugin = {
  install: Vue => {
    Vue.component(BagIcon.name, BagIcon)
  }
}
BagIcon.install = plugin.install

export default BagIcon
