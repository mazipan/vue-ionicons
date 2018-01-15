import MicAIcon from './mic-a.vue'

const plugin = {
  install: Vue => {
    Vue.component(MicAIcon.name, MicAIcon)
  }
}
MicAIcon.install = plugin.install

export default MicAIcon
