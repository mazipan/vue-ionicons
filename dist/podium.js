import PodiumIcon from './podium.vue'

const plugin = {
  install: Vue => {
    Vue.component(PodiumIcon.name, PodiumIcon)
  }
}
PodiumIcon.install = plugin.install

export default PodiumIcon
