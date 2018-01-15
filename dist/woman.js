import WomanIcon from './woman.vue'

const plugin = {
  install: Vue => {
    Vue.component(WomanIcon.name, WomanIcon)
  }
}
WomanIcon.install = plugin.install

export default WomanIcon
