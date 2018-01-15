import GearBIcon from './gear-b.vue'

const plugin = {
  install: Vue => {
    Vue.component(GearBIcon.name, GearBIcon)
  }
}
GearBIcon.install = plugin.install

export default GearBIcon
