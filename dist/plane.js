import PlaneIcon from './plane.vue'

const plugin = {
  install: Vue => {
    Vue.component(PlaneIcon.name, PlaneIcon)
  }
}
PlaneIcon.install = plugin.install

export default PlaneIcon
