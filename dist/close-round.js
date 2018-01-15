import CloseRoundIcon from './close-round.vue'

const plugin = {
  install: Vue => {
    Vue.component(CloseRoundIcon.name, CloseRoundIcon)
  }
}
CloseRoundIcon.install = plugin.install

export default CloseRoundIcon
