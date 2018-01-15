import OutletIcon from './outlet.vue'

const plugin = {
  install: Vue => {
    Vue.component(OutletIcon.name, OutletIcon)
  }
}
OutletIcon.install = plugin.install

export default OutletIcon
