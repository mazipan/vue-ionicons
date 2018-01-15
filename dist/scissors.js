import ScissorsIcon from './scissors.vue'

const plugin = {
  install: Vue => {
    Vue.component(ScissorsIcon.name, ScissorsIcon)
  }
}
ScissorsIcon.install = plugin.install

export default ScissorsIcon
