import FlashOffIcon from './flash-off.vue'

const plugin = {
  install: Vue => {
    Vue.component(FlashOffIcon.name, FlashOffIcon)
  }
}
FlashOffIcon.install = plugin.install

export default FlashOffIcon
