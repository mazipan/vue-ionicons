import IosPulseIcon from './ios-pulse.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPulseIcon.name, IosPulseIcon)
  }
}
IosPulseIcon.install = plugin.install

export default IosPulseIcon
