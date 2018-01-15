import LocationIcon from './location.vue'

const plugin = {
  install: Vue => {
    Vue.component(LocationIcon.name, LocationIcon)
  }
}
LocationIcon.install = plugin.install

export default LocationIcon
