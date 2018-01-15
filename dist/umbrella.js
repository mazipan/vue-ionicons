import UmbrellaIcon from './umbrella.vue'

const plugin = {
  install: Vue => {
    Vue.component(UmbrellaIcon.name, UmbrellaIcon)
  }
}
UmbrellaIcon.install = plugin.install

export default UmbrellaIcon
