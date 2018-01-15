import PinpointIcon from './pinpoint.vue'

const plugin = {
  install: Vue => {
    Vue.component(PinpointIcon.name, PinpointIcon)
  }
}
PinpointIcon.install = plugin.install

export default PinpointIcon
