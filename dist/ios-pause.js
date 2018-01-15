import IosPauseIcon from './ios-pause.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPauseIcon.name, IosPauseIcon)
  }
}
IosPauseIcon.install = plugin.install

export default IosPauseIcon
