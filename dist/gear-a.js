import GearAIcon from './gear-a.vue'

const plugin = {
  install: Vue => {
    Vue.component(GearAIcon.name, GearAIcon)
  }
}
GearAIcon.install = plugin.install

export default GearAIcon
