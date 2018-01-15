import EggIcon from './egg.vue'

const plugin = {
  install: Vue => {
    Vue.component(EggIcon.name, EggIcon)
  }
}
EggIcon.install = plugin.install

export default EggIcon
