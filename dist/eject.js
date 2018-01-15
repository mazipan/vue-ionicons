import EjectIcon from './eject.vue'

const plugin = {
  install: Vue => {
    Vue.component(EjectIcon.name, EjectIcon)
  }
}
EjectIcon.install = plugin.install

export default EjectIcon
