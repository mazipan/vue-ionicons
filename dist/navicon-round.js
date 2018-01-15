import NaviconRoundIcon from './navicon-round.vue'

const plugin = {
  install: Vue => {
    Vue.component(NaviconRoundIcon.name, NaviconRoundIcon)
  }
}
NaviconRoundIcon.install = plugin.install

export default NaviconRoundIcon
