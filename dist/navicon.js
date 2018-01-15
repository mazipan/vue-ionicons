import NaviconIcon from './navicon.vue'

const plugin = {
  install: Vue => {
    Vue.component(NaviconIcon.name, NaviconIcon)
  }
}
NaviconIcon.install = plugin.install

export default NaviconIcon
