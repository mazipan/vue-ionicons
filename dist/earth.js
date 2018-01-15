import EarthIcon from './earth.vue'

const plugin = {
  install: Vue => {
    Vue.component(EarthIcon.name, EarthIcon)
  }
}
EarthIcon.install = plugin.install

export default EarthIcon
