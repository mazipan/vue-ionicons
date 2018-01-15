import IosPulseStrongIcon from './ios-pulse-strong.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPulseStrongIcon.name, IosPulseStrongIcon)
  }
}
IosPulseStrongIcon.install = plugin.install

export default IosPulseStrongIcon
