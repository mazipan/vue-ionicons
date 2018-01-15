import HammerIcon from './hammer.vue'

const plugin = {
  install: Vue => {
    Vue.component(HammerIcon.name, HammerIcon)
  }
}
HammerIcon.install = plugin.install

export default HammerIcon
