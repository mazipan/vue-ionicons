import MapIcon from './map.vue'

const plugin = {
  install: Vue => {
    Vue.component(MapIcon.name, MapIcon)
  }
}
MapIcon.install = plugin.install

export default MapIcon
