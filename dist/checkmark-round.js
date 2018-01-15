import CheckmarkRoundIcon from './checkmark-round.vue'

const plugin = {
  install: Vue => {
    Vue.component(CheckmarkRoundIcon.name, CheckmarkRoundIcon)
  }
}
CheckmarkRoundIcon.install = plugin.install

export default CheckmarkRoundIcon
