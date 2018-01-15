import StopIcon from './stop.vue'

const plugin = {
  install: Vue => {
    Vue.component(StopIcon.name, StopIcon)
  }
}
StopIcon.install = plugin.install

export default StopIcon
