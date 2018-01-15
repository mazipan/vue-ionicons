import WrenchIcon from './wrench.vue'

const plugin = {
  install: Vue => {
    Vue.component(WrenchIcon.name, WrenchIcon)
  }
}
WrenchIcon.install = plugin.install

export default WrenchIcon
