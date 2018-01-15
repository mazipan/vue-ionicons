import PauseIcon from './pause.vue'

const plugin = {
  install: Vue => {
    Vue.component(PauseIcon.name, PauseIcon)
  }
}
PauseIcon.install = plugin.install

export default PauseIcon
