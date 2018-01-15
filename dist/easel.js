import EaselIcon from './easel.vue'

const plugin = {
  install: Vue => {
    Vue.component(EaselIcon.name, EaselIcon)
  }
}
EaselIcon.install = plugin.install

export default EaselIcon
