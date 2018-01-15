import PlanetIcon from './planet.vue'

const plugin = {
  install: Vue => {
    Vue.component(PlanetIcon.name, PlanetIcon)
  }
}
PlanetIcon.install = plugin.install

export default PlanetIcon
