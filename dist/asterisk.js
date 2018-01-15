import AsteriskIcon from './asterisk.vue'

const plugin = {
  install: Vue => {
    Vue.component(AsteriskIcon.name, AsteriskIcon)
  }
}
AsteriskIcon.install = plugin.install

export default AsteriskIcon
