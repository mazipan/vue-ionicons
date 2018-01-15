import BonfireIcon from './bonfire.vue'

const plugin = {
  install: Vue => {
    Vue.component(BonfireIcon.name, BonfireIcon)
  }
}
BonfireIcon.install = plugin.install

export default BonfireIcon
