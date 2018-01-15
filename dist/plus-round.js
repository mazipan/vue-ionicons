import PlusRoundIcon from './plus-round.vue'

const plugin = {
  install: Vue => {
    Vue.component(PlusRoundIcon.name, PlusRoundIcon)
  }
}
PlusRoundIcon.install = plugin.install

export default PlusRoundIcon
