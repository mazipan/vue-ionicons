import WaterdropIcon from './waterdrop.vue'

const plugin = {
  install: Vue => {
    Vue.component(WaterdropIcon.name, WaterdropIcon)
  }
}
WaterdropIcon.install = plugin.install

export default WaterdropIcon
