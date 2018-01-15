import FlashIcon from './flash.vue'

const plugin = {
  install: Vue => {
    Vue.component(FlashIcon.name, FlashIcon)
  }
}
FlashIcon.install = plugin.install

export default FlashIcon
