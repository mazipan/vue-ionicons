import PinIcon from './pin.vue'

const plugin = {
  install: Vue => {
    Vue.component(PinIcon.name, PinIcon)
  }
}
PinIcon.install = plugin.install

export default PinIcon
