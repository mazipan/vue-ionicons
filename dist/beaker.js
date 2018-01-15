import BeakerIcon from './beaker.vue'

const plugin = {
  install: Vue => {
    Vue.component(BeakerIcon.name, BeakerIcon)
  }
}
BeakerIcon.install = plugin.install

export default BeakerIcon
